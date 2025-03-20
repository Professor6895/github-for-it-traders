<?php

namespace  Jed\Ecommerce\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Jed\Core\Http\Traits\ControllerTrait;
use Jed\Ecommerce\App\FAQ;
use Jed\Ecommerce\Cart\ProductReview;

class FAQController extends Controller
{
    use ControllerTrait;

    public function index(Request $request)
    {
        $faqs = FAQ::latest();

        if (request()->has('type')) {
            $faqs = $faqs->where([
                'type' => $request->type,
                'type_id' => $request->type == 'brand' ? $request->brand_id : $request->category_id
            ]);
        }
        $faqs = $faqs->get();
        // $reviews = ProductReview::with('user:name,id,avatar', 'product:name,id')->latest()->paginate(env('PER_PAGE_PAGINATION', 20));
        return response()->json(['success' => true, 'data' => $faqs]);
    }

    public function storeFaq(Request $request)
    {
        $this->validate($request, [
            'question' => 'required',
            'answer' => 'required',
        ]);

        FAQ::create([
            'question' => $request->question,
            'answer' => $request->answer,
            'type' => $request->type,
            'type_id' => $request->type == 'brand' ? $request->brand_id : $request->category_id
        ]);
        return response()->json(['success' => true, 'message' => 'FAQ successfully added.']);
    }

    public function updateFaq(Request $request, $id)
    {
        $this->validate($request, [
            'question' => 'required',
            'answer' => 'required',
        ]);

        $faq = FAQ::find($id);
        $faq->update([
            'question' => $request->question,
            'answer' => $request->answer,
        ]);
      
        return response()->json(['success' => true, 'message' => 'FAQ successfully updated.']);
    }

    public function deleteFaq($id) {
        FAQ::find($id)->delete();
        return response()->json(['success' => true, 'message' => 'FAQ successfully deleted.']);
    }
}
