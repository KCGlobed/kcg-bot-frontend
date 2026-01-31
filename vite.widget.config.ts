import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import tailwindConfig from './tailwind.widget.config'

export default defineConfig({
    plugins: [react()],
    css: {
        postcss: {
            plugins: [
                tailwindcss(tailwindConfig),
                autoprefixer,
            ],
        },
    },
    define: {
        'process.env.NODE_ENV': JSON.stringify('production'),
    },
    build: {
        outDir: 'widget-build',
        emptyOutDir: true,
        lib: {
            entry: resolve(__dirname, 'src/widget.tsx'),
            name: 'KcgChatWidget',
            fileName: 'widget', // results in widget.js for es format
            formats: ['es']
        },
        rollupOptions: {
            output: {
                assetFileNames: (assetInfo) => {
                    if (assetInfo.name === 'style.css') return 'widget.css';
                    return assetInfo.name || 'assets/[name]-[hash][extname]';
                },
            }
        }
    }
})
