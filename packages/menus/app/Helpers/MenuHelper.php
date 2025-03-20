<?php

namespace Jed\Menus\App\Helpers;

use Jed\Menus\App\Menu;

class MenuHelper
{
    public function getMenu($slug)
    {
        $menu = Menu::where(['slug' => $slug])->first();
        return $menu;
    }

    public function getMenus($slugs)
    {
        $menu = Menu::whereIn('slug', $slugs)->get()->mapWithKeys(function ($menu) {
            return [$menu['slug'] => $menu];
        })->toArray();
        return $menu;
    }
}
