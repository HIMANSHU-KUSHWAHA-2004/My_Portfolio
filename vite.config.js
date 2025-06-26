// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/My_Portfolio/',  // <- your GitHub repo name with slashes
  plugins: [react()],
});
