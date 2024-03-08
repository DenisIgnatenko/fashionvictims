import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: '../server/dist',
  },
  base: '/',
  plugins: [react()],
});
