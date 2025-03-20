<?php

namespace Jed\Core\Helpers;

use Illuminate\Support\Arr;

class ConfigHelper
{
  public function mergeConfig(array $original, array $merging)
  {
      $array = array_merge($original, $merging);

      foreach ($original as $key => $value) {
          if (! is_array($value)) {
              continue;
          }

          if (!Arr::exists($merging, $key)) {
              continue;
          }

          if (is_numeric($key)) {
              continue;
          }

          $array[$key] = $this->mergeConfig($value, $merging[$key]);
      }

      return $array;
  }
}