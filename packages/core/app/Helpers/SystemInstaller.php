<?php

namespace Jed\Core\Helpers;

use Illuminate\Support\Facades\Config;
use Artisan;
use DB;
use File;
use Illuminate\Support\Str;
use Jed\Core\App\Admin;

/**
 * Class PackageHelper
 * @package Jed\Core\Helpers
 */
class SystemInstaller
{
  public static function createDefaultEnvFile()
	{
        // Rename file
        if (!is_file(base_path('.env')) && is_file(base_path('.env.example'))) {
            File::move(base_path('.env.example'), base_path('.env'));
        }

        // Update .env file
        static::updateEnv([
            'APP_KEY' => 'base64:'.base64_encode(random_bytes(32)),
        ]);
	}

    public static function checkDBConnection($host, $port, $database, $username, $password, $prefix = null)
    {
        if (!static::isDbValid($host, $port, $database, $username, $password)) {
            return false;
        }

        // Set database details
        static::saveDbVariables($host, $port, $database, $username, $password, $prefix);

        // Try to increase the maximum execution time

        // Create tables
       

        // Create Permissions
        // Artisan::call('db:seed', ['--class' => 'Database\Seeds\Permissions', '--force' => true]);

        return true;
    }

    /**
     * Check if the database exists and is accessible.
     *
     * @param $host
     * @param $port
     * @param $database
     * @param $host
     * @param $database
     * @param $username
     * @param $password
     *
     * @return bool
     */
    public static function isDbValid($host, $port, $database, $username, $password)
    {
        Config::set('database.connections.install_test', [
            'host'      => $host,
            'port'      => $port,
            'database'  => $database,
            'username'  => $username,
            'password'  => $password,
            'driver'    => $connection = config('database.default', 'mysql'),
            'charset'   => config("database.connections.$connection.charset", 'utf8mb4'),
        ]);

        try {
            DB::connection('install_test')->getPdo();
        } catch (\Exception $e) {
            return false;
        }

        // Purge test connection
        DB::purge('install_test');

        return true;
    }

    public static function saveDbVariables($host, $port, $database, $username, $password, $prefix = null)
    {
        $prefix = !is_null($prefix) ? $prefix : strtolower(Str::random(3) . '_');

        // Update .env file
        static::updateEnv([
            'DB_HOST'       =>  $host,
            'DB_PORT'       =>  $port,
            'DB_DATABASE'   =>  $database,
            'DB_USERNAME'   =>  $username,
            'DB_PASSWORD'   =>  '"' . $password . '"',
            'DB_PREFIX'     =>  $prefix,
        ]);

        $con = config('database.default', 'mysql');

        // Change current connection
        $db = Config::get('database.connections.' . $con);

        $db['host'] = $host;
        $db['database'] = $database;
        $db['username'] = $username;
        $db['password'] = $password;
        $db['prefix'] = $prefix;

        Config::set('database.connections.' . $con, $db);

        DB::purge($con);
        DB::reconnect($con);
    }


    public static function updateEnv($data)
    {
        if (empty($data) || !is_array($data) || !is_file(base_path('.env'))) {
            return false;
        }

        $env = file_get_contents(base_path('.env'));

        $env = explode("\n", $env);

        foreach ($data as $data_key => $data_value) {
            $updated = false;

            foreach ($env as $env_key => $env_value) {
                $entry = explode('=', $env_value, 2);

                // Check if new or old key
                if ($entry[0] == $data_key) {
                    $env[$env_key] = $data_key . '=' . $data_value;
                    $updated = true;
                } else {
                    $env[$env_key] = $env_value;
                }
            }

            // Lets create if not available
            if (!$updated) {
                $env[] = $data_key . '=' . $data_value;
            }
        }

        $env = implode("\n", $env);

        file_put_contents(base_path('.env'), $env);

        return true;
    }


    public static function createAdmin($email, $password)
    {
        Admin::create([
            'name' => "System Admin",
            'email' => $email,
            'password' => bcrypt($password)
        ]);
    }
}