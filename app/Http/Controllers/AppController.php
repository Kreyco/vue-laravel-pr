<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class AppController extends Controller
{
    private function render() {
        $renderer_source = Storage::disk('local_public')->get('node_modules/vue-server-renderer/basic.js');
        $app_source = Storage::disk('local_public')->get('resources/assets/js/app-server.js');
        $v8 = new \V8Js();
        ob_start();
//        $v8->executeString('var process = { env: { VUE_ENV: "server", NODE_ENV: "production" }}; this.global = { process: process };');
        $js =
            <<<EOT
var process = { env: { VUE_ENV: "server", NODE_ENV: "production" } };
this.global = { process: process };
EOT;
        $v8->executeString($js);
        $v8->executeString($renderer_source);
        $v8->executeString($app_source);
//        $v8->executeString('print("test");');
        return ob_get_clean();
    }

    public function get() {
        $ssr = $this->render();
        return view('index', ['ssr' => $ssr]);
    }
}
