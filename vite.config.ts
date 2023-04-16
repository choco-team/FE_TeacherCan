import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import svgrPlugin from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  esbuild: {
    loader: 'tsx',
  },
  server: { host: 'localhost', port: 3000 },
  plugins: [react(), tsconfigPaths(), svgrPlugin()],
  resolve: {
    alias: {
      '@Assets': path.resolve(__dirname, './src/assets'),
      '@Components': path.resolve(__dirname, './src/components'),
      '@Constant': path.resolve(__dirname, './src/constant'),
      '@Hooks': path.resolve(__dirname, './src/hooks'),
      '@Pages': path.resolve(__dirname, './src/pages'),
      '@Utils': path.resolve(__dirname, './src/utils'),
      '@Styles': path.resolve(__dirname, './src/styles'),
    },
  },
});
