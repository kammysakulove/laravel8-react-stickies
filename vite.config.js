import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    server: {
        host: true,
        hmr: {
            host: "localhost",
        },
        // proxy: {
        //     '/app':  {
        //         target: 'http://app.centos7.test:8080',
        //         changeOrigin: true,
        //     },
        // },
        watch: {
            usePolling: true,
        },
    },
    publicDir: "fake_dir_so_nothing_gets_copied",
    build: {
        manifest: true,
        outDir: "public/build",
        rollupOptions: {
            input: ["resources/ts/index.css", "resources/ts/index.tsx"],
        },
    },
});
