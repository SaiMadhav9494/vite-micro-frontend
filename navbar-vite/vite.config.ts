import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'
import {dependencies} from './package.json'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    host: 'local.ravenslingshot.com',
    port: 5000,
  },
  preview: {
    port: 5000,
  },
  plugins: [
    react(),
    federation({
      name: 'NavBarVite',
      filename: 'remoteEntry.js',
      exposes: {
        './App': './src/App.tsx'
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
