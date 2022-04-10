import { mergeConfig } from 'vite';
import baseConig from './vite.config.base';

export default mergeConfig(
  {
    mode: 'production',
    plugins: [],
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            arco: ['@arco-design/web-vue'],
            vue: ['vue', 'vue-router', '@vueuse/core'],
          },
        },
      },
      chunkSizeWarningLimit: 2000,
    },
  },
  baseConig,
);
