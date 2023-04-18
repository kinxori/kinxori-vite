import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import replace from '@rollup/plugin-replace';
import dotenv from 'dotenv';

dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // replace({
    //   'process.env.VITE_APP_EMIAL': JSON.stringify(process.env.VITE_APP_EMIAL),
    //   'process.env.VITE_APP_PASS': JSON.stringify(process.env.VITE_APP_PASS)
    // })
  ],
  base: "/",
  
});
