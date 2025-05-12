import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 
                'resources/css/style.css', 
                'resources/css/responsive.css', 
                'resources/css/normalize.css', 
                'resources/css/icomoon.css', 
                'resources/css/meanmenu.css', 
                'resources/css/slick.css',
                'resources/css/jquery-ui.css',
                'resources/css/nice-select.css',
                'resources/css/bootstrap-reboot.css',
                'resources/css/bootstrap.css',
                'resources/css/bootstrap-grid.css',
                'resources/css/default-skin.css',
                'resources/js/app.js'],
            refresh: true,
        }),
        tailwindcss(),
    ],
});
