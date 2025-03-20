<?php

namespace Jed\Ecommerce\Http\Controllers\Website;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Jed\Ecommerce\Cart\ProductReview;

class ProductReviewController extends Controller
{
    public function storeReview(Request $request)
    {
        if ($request->has('id')) {
            ProductReview::where('id', $request->id)->update([
                'rating' => $request->rating,
                'review' => $request->review,
            ]);
        } else {
            $product_review = ProductReview::create([
                'product_id' => $request->product_id,
                'user_id' => $request->user_id,
                'rating' => $request->rating,
                'review' => $request->review,
                'status' => ProductReview::STATUS_PENDING,
                'user_id' => auth('web')->user()->id
            ]);
        }

        if ($request->wantsJson()) {
            session()->flash('message', 'Thank you for reviewing the product. Your review will be posted soon.');
            return response()->json(['success' => true, 'message' => 'Thank you for reviewing the product. Your review will be posted soon.']);
        } else {
            return redirect()->back()->with(['success' => true, 'message' => 'Thank you for reviewing the product. Your review will be posted soon.']);
        }
    }

    public function getUserReview($product_id) {
        $review = ProductReview::with('user')->where(['user_id' => auth('web')->user()->id, 'product_id' => $product_id])->first();
        if ($review)
            return response()->json(['success' => true, 'review' => $review]);
        else 
            return response()->json(['success' => false]);
    }
}
