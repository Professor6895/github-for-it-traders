<?php

namespace  Jed\Ecommerce\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use Jed\Core\Http\Traits\ControllerTrait;
use Jed\Ecommerce\Cart\ProductReview;

class ProductReviewsController extends Controller
{
    use ControllerTrait;

    public function index()
    {
        $reviews = ProductReview::with('user:name,id,avatar', 'product:name,id')->latest()->paginate(env('PER_PAGE_PAGINATION', 20));
        return response()->json(['success' => true, 'data' => $reviews]);
    }

    public function toggleStatus($id)
    {
        $review = ProductReview::find($id);
        $review->update([
         'status' => ($this->isTrue($review->status)) ? ProductReview::STATUS_PENDING : ProductReview::STATUS_APPROVED
        ]);
        return response()->json(['success' => true, 'message' => 'Status successfully updated']);
    }
}
