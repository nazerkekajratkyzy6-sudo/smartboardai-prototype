const { defineConfig } = require('vite');
const react = require('@vitejs/plugin-react');

// CommonJS-версия для Vercel
module.exports = defineConfig({
  plugins: [react()],
  root: '.',             // корень проекта
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: 'index.html' // точка входа
    }
  },
});
