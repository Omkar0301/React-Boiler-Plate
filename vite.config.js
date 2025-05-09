  import { defineConfig } from 'vite';
  import react from '@vitejs/plugin-react';
  import path from 'path';

  export default defineConfig({
    plugins: [react()],
    resolve: {
      alias: {
        '@redux': path.resolve('src/redux'),
        '@components': path.resolve('src/components'),
        '@assets': path.resolve('src/assets'),
        '@pages': path.resolve('src/pages'),
        '@constants': path.resolve('src/constants'),
        '@utils': path.resolve('src/utils'),
      },
    },
  });
