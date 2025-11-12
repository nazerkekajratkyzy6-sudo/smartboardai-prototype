import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Настройки сборки для Vercel
export default defineConfig({
  plugins: [react()],
  root: '.',             // указываем корень проекта
  build: {
    outDir: 'dist',      // куда складывать собранные файлы
    rollupOptions: {
      input: 'index.html' // говорим Vite, где стартовый файл
    }
  },
});
