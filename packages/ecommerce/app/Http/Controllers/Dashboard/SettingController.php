<?php

namespace Jed\Ecommerce\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Jed\Core\App\Setting;
use Jed\Core\Http\Traits\ControllerTrait;

class SettingController extends Controller
{
    use ControllerTrait;

    public function savePopupSetting(Request $request)
    {
        $setting = Setting::where(['module' => 'ecommerce'])->first();
        $ecom_settings = json_decode($setting->settings, true);
        $ecom_settings['initial_popup']['enabled'] = isTrue($request->enabled) ? true : false;
        $ecom_settings['initial_popup']['interval'] = $request->interval;
        $ecom_settings['initial_popup']['popup_delay'] = $request->popup_delay;
        $ecom_settings['initial_popup']['link'] = $request->link;


        $asset_path = "public/uploads/images/settings/ecommerce";
        if ($request->file('image')) {
            if (!isNull($ecom_settings['initial_popup']['image'])) {
                $image_name = array_reverse(explode('/', $ecom_settings['initial_popup']['image']))[0];
                $this->deleteFile($image_name, $asset_path);
            }
            $response = $this->uploadImage($request->file('image'), $asset_path, false);
            $ecom_settings['initial_popup']['image'] = $response['file_url'];
        }
        $setting->update([
          'settings' =>  json_encode($ecom_settings)
          ]);


        return response()->json(['success' => true, 'message' => 'Settings successfully updated.']);
    }
}
