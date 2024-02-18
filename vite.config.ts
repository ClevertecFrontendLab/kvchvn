import path from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [react()],
    server: {
        host: true,
        port: 3000,
    },
    resolve: {
        alias: {
            '@public': path.resolve(__dirname, 'public'),
            '@components': path.resolve(__dirname, 'src/components'),
            '@constants': path.resolve(__dirname, 'src/constants'),
            '@hooks': path.resolve(__dirname, 'src/hooks'),
            '@pages': path.resolve(__dirname, 'src/pages'),
            '@redux': path.resolve(__dirname, 'src/redux'),
            '@type': path.resolve(__dirname, 'src/type'),
            '@styles': path.resolve(__dirname, 'src/styles'),
            '@ui': path.resolve(__dirname, 'src/ui'),
            '@utils': path.resolve(__dirname, 'src/utils'),
        },
    },
    css: {
        preprocessorOptions: {
            less: {
                javascriptEnabled: true,
                modifyVars: {
                    'primary-color': '@geekblue-base',
                },
            },
        },
    },
});
