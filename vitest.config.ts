import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            vue: 'vue/dist/vue.esm-bundler.js',
        },
    },
    test: {
        name: 'browser',
        setupFiles: ['vitest-browser-vue'],
        browser: {
            enabled: true,
            provider: 'playwright',
            headless: true,
            instances: [
                { browser: 'chromium' },
                { browser: 'firefox' },
                { browser: 'webkit' },
            ],
        },
    },
})