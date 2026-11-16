import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true, // Memungkinkan pengujian PWA saat mode development
      },
      manifest: {
        name: 'TaskPulse PWA Tracker',
        short_name: 'TaskPulse',
        description: 'Aplikasi Manajemen Tugas Harian Offline-First',
        theme_color: '#0f172a',
        background_color: '#0f172a',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: 'https://cdn-icons-png.flaticon.com/512/906/906334.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'https://cdn-icons-png.flaticon.com/512/906/906334.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
    }),
  ],
});