<?php

namespace App\Providers;

use Facade\FlareClient\View;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Blade;
use Illuminate\Support\ServiceProvider;
use Jed\Elearning\App\CourseCategory;
use Illuminate\Support\Facades\Schema;
use Jed\Ecommerce\App\ProductCategory;
use Illuminate\Support\Facades\URL;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        include __DIR__ . '/../helpers.php';
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
     	if(env('APP_ENV') !== 'local') {
        	URL::forceScheme('https');
    	}
        Schema::defaultStringLength(191);
        if (config('database.connections.mysql.database') != 'forge' && Schema::hasTable('product_categories')) {
            $product_categories = ProductCategory::select('id', 'title', 'slug', 'featured')->orderBy('order')
                ->with('media', 'children.media')->where('parent_id', null)->get();
            view()->share('product_categories', $product_categories);
        }

        Collection::macro('paginate', function ($perPage, $total = null, $page = null, $pageName = 'page') {
            $page = $page ?: LengthAwarePaginator::resolveCurrentPage($pageName);

            return new LengthAwarePaginator(
                $this->forPage($page, $perPage),
                $total ?: $this->count(),
                $perPage,
                $page,
                [
                    'path' => LengthAwarePaginator::resolveCurrentPath(),
                    'pageName' => $pageName,
                ]
            );
        });

        Blade::directive('convert', function ($money) {
            return "<?php echo number_format($money); ?>";
        });
    }
}