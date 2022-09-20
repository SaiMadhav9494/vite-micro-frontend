import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'
import {dependencies} from './package.json'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    host: 'local.ravenslingshot.com',
    port: 5001,
  },
  preview: {
    port: 5001
  },
  plugins: [
    react(),
    federation({
      name: 'host-vite',
      remotes: {
        NavBarVite: 'http://local.ravenslingshot.com:5000/assets/remoteEntry.js'
      },
      shared: {
        ...dependencies,
        react: {
          requiredVersion: dependencies['react']
        },
        "react-dom": {
          requiredVersion: dependencies['react-dom']
        }
      }
    })
  ],
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  },
})
