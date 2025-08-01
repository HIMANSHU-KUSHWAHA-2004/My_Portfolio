import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/My_Portfolio/', // <- your GitHub repo name with slashes
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
  },
});
