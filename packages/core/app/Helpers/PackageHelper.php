<?php

namespace Jed\Core\Helpers;

/**
 * Class PackageHelper
 * @package Jed\Core\Helpers
 */
class PackageHelper
{
    /**
     * @return array
     */
    public static function serviceProviders()
    {
        $packages = [];

        foreach (self::names() as $key => $value) {
            $packages[] = sprintf('Jed\%s\Providers\%sServiceProvider', $value, $value);
            if (file_exists(base_path() . "/packages/" . strtolower($key) . "/app/Providers/RouteServiceProvider.php")) {
                $packages[] = sprintf('Jed\%s\Providers\RouteServiceProvider', $value, $value);
            }
            if (file_exists(base_path() . "/packages/" . strtolower($key) . "/app/Providers/AuthServiceProvider.php")) {
                $packages[] = sprintf('Jed\%s\Providers\AuthServiceProvider', $value, $value);
            }
            if (file_exists(base_path() . "/packages/" . strtolower($key) . "/app/Providers/EventServiceProvider.php")) {
                $packages[] = sprintf('Jed\%s\Providers\EventServiceProvider', $value, $value);
            }
            if (file_exists(base_path() . "/packages/" . strtolower($key) . "/app/Providers/ViewServiceProvider.php")) {
                $packages[] = sprintf('Jed\%s\Providers\ViewServiceProvider', $value, $value);
            }
        }
        return $packages;
    }

    public static function names()
    {
        foreach (glob(base_path() . '/packages/*') as $directory) {
            $name = basename($directory);
            $names[$name] = str_replace(' ', '', ucwords(str_replace('-', ' ', $name)));
        }
        unset($names['core']);
        $names = ["core" => "Core"] + $names;
        return $names;
    }
}