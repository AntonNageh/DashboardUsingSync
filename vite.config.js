import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [
    react(), 
    tailwindcss(),
    VitePWA({  
    registerType: 'prompt',  
    includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],  
    manifest: {  
    name: 'Dashboard',  
      short_name: 'Dashboard',  
      description: 'Anton Nageh`s Dashboard.',  
      theme_color: '#ffffff',  
      start_url: '/',  
      icons: [  
    {  
    src: 'pwa-192x192.png',  
              sizes: '192x192',  
              type: 'image/png',  
            },  
            {  
    src: 'pwa-512x512.png',  
              sizes: '512x512',  
              type: 'image/png',  
            },  
            {  
    src: 'pwa-512x512.png',  
              sizes: '512x512',  
              type: 'image/png',  
              purpose: 'any maskable',  
            },  
          ],  
        },  
      }),  ],
    })
