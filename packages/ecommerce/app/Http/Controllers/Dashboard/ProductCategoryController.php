<?php

namespace Jed\Ecommerce\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Jed\Pages\App\Page;
use Illuminate\Support\Str;
use Jed\Core\Http\Traits\ControllerTrait;
use Jed\Ecommerce\App\ProductCategory;
use Illuminate\Validation\Rule;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class ProductCategoryController extends Controller
{
    use ControllerTrait;

    public function index(Request $request)
    {
        $categories = ProductCategory::with('media')->withCount('images');
        if ($request->data === 'parent') {
            $categories = $categories->where('parent_id', null)->orderBy('order');
        } else {
            $categories =  $categories->latest();
        }
        if ($request->has('search') && !$this->isNull($request->search)) {
            $categories = $categories->where('title', 'LIKE', "%{$request->search}%");
        }

        $categories  = $categories->paginate($request->data === 'parent' ? 300 : env('ADMIN_PER_PAGE_PAGINATION', 10));
        return response()->json(['success' => true, 'data' => $categories]);
    }


    public function getCategoryTree()
    {
        $categories = ProductCategory::with('media')->with('children')->where('parent_id', null)->get();
        return response()->json(['success' => true, 'data' => $categories]);
    }

    public function getCategoryDropdown()
    {
        $categories = ProductCategory::with('media')->select('title', 'id', 'slug','parent_tree')
          ->get()
          ->setAppends(['category_full_name']);
        return response()->json(['success' => true, 'data' => $categories]);
    }


    public function store(Request $request)
    {
        $this->validate($request, [
        'title' => 'required|max:100',
        ]);

        $category = ProductCategory::create([
        'title' => $request->title,
        'slug' => Str::slug($request->title),
        'parent_id' => $request->parent_id,
        'featured' => ($this->isTrue($request->featured)) ? 1 : 0,
        'description' => $request->description,
        'custom_code' => $request->custom_code
        ]);

        $this->updateMeta($category, $request);

        if ($request->file('image')) {
            $category->addMedia($request->file('image'))->toMediaCollection();
        }

        return response()->json(['success' => true, 'message' => 'Category successfully added.']);
    }

    public function show($id)
    {
        $page = Page::findOrFail($id);
        return response()->json(['success' => true, 'data' => $page]);
    }

    public function update($id, Request $request)
    {
        $this->validate($request, [
         'title' => ['required', Rule::unique('product_categories')->ignore($id)],
        ]);

        $category = ProductCategory::find($id);
        $category->update([
        'title' => $request->title,
        'slug' => ($request->slug) ? $request->slug : Str::slug($request->title),
        'parent_id' => $request->parent_id,
        'featured' => ($this->isTrue($request->featured)) ? 1 : 0,
        'description' => $request->description,
        'custom_code' => $request->custom_code
        ]);

        $this->updateMeta($category, $request);
        if ($request->file('image')) {
            if ($category->getFirstMedia()) {
                $category->getFirstMedia()->delete();
            }
            $category->addMedia($request->file('image'))->toMediaCollection();
        }

        return response()->json(['success' => true, 'message' => 'Category successfully updated']);
    }

    public function destroy($id)
    {
        $category = ProductCategory::find($id);
        $category->delete();
        return response()->json(['success' => true, 'message' => 'Product category successfully deleted']);
    }

    public function sortCategories(Request $request)
    {
        $order = $request->payload;
        foreach ($order as $order_item) {
            $category_ = ProductCategory::where('id', $order_item['category_id'])->update([
            'order' => $order_item['order']
            ]);
        }

        return response()->json(['success' => true, 'message' => 'Product categories successfully sorted']);
    }

    //PRODUCT CATEGORY IMAGES
    public function getProductCategoryImages($category_id)
    {
        $images = collect();
        $category = ProductCategory::find($category_id);

        foreach ($category->images as $media) {
            $images->push([
                'image_preview' => $media->getUrl('thumb'),
                'custom_properties' => $media->custom_properties,
                'id' => $media->uuid
            ]);
        }
        return response()->json(['success' => true, 'data' => $images]);
    }

    public function saveProductCategoryImage($category_id, Request $request)
    {
        $this->validate($request, [
        'image' => 'required|mimes:jpg,bmp,png|max:2048',
        ]);
        $category = ProductCategory::find($category_id);
        if ($request->file('image')) {
            $media = $category->addMedia($request->file('image'))->toMediaCollection('banners');

            if ($request->has('link')) {
                $media->setCustomProperty('link', $request->link);
                $media->save();
            }
        }
        return response()->json(['success' => true, 'message' => 'Product category image successfully updated']);
    }

    public function deleteProductCategoryImage($category_id, $image_id)
    {
        $media = Media::where('uuid', $image_id)->first();
        $media->delete();
        return response()->json(['success' => true, 'message' => "Image successfully deleted"]);
    }
}
