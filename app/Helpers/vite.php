<?php

    use Illuminate\Support\Facades\Http;
    use Illuminate\Support\HtmlString;

    function vite_assets(): HtmlString
    {
        $devServerIsRunning = false;
        if (config('app.env') === 'local') {
            try {
                Http::get("http://localhost:5173");
                $devServerIsRunning = true;
            } catch (Exception $e) {
            }
        }

        // ローカルサーバに接続できた場合
        if ($devServerIsRunning) {
            return new HtmlString(<<<'HTML'
                <script type="module">
                    import RefreshRuntime from "http://localhost:5173/@react-refresh"
                    RefreshRuntime.injectIntoGlobalHook(window)
                    window.$RefreshReg$ = () => {}
                    window.$RefreshSig$ = () => (type) => type
                    window.__vite_plugin_react_preamble_installed__ = true
                </script>
                <script type="module" src="http://localhost:5173/@vite/client"></script>
                <script type="module" src="http://localhost:5173/resources/ts/index.tsx"></script>
            HTML);
        }


        $manifest = json_decode(file_get_contents(
            public_path('build/manifest.json')
        ), true);

        return new HtmlString(<<<HTML
        <link rel="stylesheet" href="./build/{$manifest['resources/ts/index.css']['file']}"></script>
        <script type="module" src="./build/{$manifest['resources/ts/index.tsx']['file']}"></script>
    HTML);
    }
