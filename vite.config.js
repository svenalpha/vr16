import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server:{proxy:{//'/apiproxy':'http://localhost:5173'
                 '/apiproxy':'https://vr16.onrender.com'
                }
         },
  plugins: [react()]
})
