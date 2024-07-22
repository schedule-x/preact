import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      preact(),
  ],
  build: {
    lib: {
      entry: 'src/index.tsx',
      name: 'ScheduleXPreact',
    },
    rollupOptions: {
      external: ['preact', '@schedule-x/calendar'],
    }
  },
})
