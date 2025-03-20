<?php

namespace Jed\Core\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Jed\Core\App\Setting;
use Jed\Core\Http\Traits\ControllerTrait;

class SettingsController extends Controller
{
    use ControllerTrait;

    public function getSettings(Request $request)
    {
        $settings = Setting::all();
        $keyed = $settings->mapWithKeys(function ($setting) {
            return [$setting['module'] => json_decode($setting['settings'], true)];
        });

        $settings_ = $keyed->all();
        return response()->json($settings_);
    }


    public function saveModuleSetting($module, Request $request)
    {
        $setting = Setting::where(['module' => $module])->first();
        if ($module === 'core') {
            $this->saveCoreSettings($setting, $request);
        } else {
            $setting->update([
            'settings' => json_encode($request->settings)
            ]);
        }

        return response()->json(['success' => true, 'message' => 'Settings successfully updated.']);
    }

    public function saveCoreSettings($setting, $request)
    {
        $existing_settings = json_decode($setting->settings, true);
        $settings = [
        'brand_name' => $request->brand_name,
        'brand_acronym' => $request->brand_acronym,
        'address' => $request->address,
        'description' => $request->description,
        'meta_title' => $request->meta_title,
        'meta_description' => $request->meta_description,
        'meta_keywords' => $request->meta_keywords,
        'logo' => isset($existing_settings['logo']) ? $existing_settings['logo'] : null,
        'login_image' => isset($existing_settings['login_image']) ? $existing_settings['login_image'] : null,
        'favicon' => isset($existing_settings['favicon']) ? $existing_settings['favicon'] : null,
        'email' => $request->email,
        'contact_number' => $request->contact_number,
        'social_facebook' => $request->social_facebook,
        'social_instagram' => $request->social_instagram,
        'social_twitter' => $request->social_twitter,
        'social_linkedin' => $request->social_linkedin,
        'social_google' => $request->social_google,
        'social_youtube' => $request->social_youtube
        ];

        $asset_path = "public/uploads/images/settings/core";
        if ($request->file('logo')) {
            $response = $this->uploadImage($request->file('logo'), $asset_path, false);
            $settings['logo'] = $response['file_url'];
        }
        if ($request->file('login_image')) {
            $response = $this->uploadImage($request->file('login_image'), $asset_path, false);
            $settings['login_image'] = $response['file_url'];
        }

        if ($request->file('favicon')) {
            $response = $this->uploadImage($request->file('favicon'), $asset_path, false);
            $settings['favicon'] = $response['file_url'];
        }

      // dd(json_encode($settings));
        $setting->update([
        'settings' =>  json_encode($settings)
        ]);
    }
}
