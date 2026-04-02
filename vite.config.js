import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

const repoSegment = process.env.GITHUB_REPOSITORY?.split('/')[1]
const isUserOrOrgSite = Boolean(repoSegment?.endsWith('.github.io'))
const base =
  process.env.VITE_BASE_PATH ??
  (repoSegment && !isUserOrOrgSite ? `/${repoSegment}/` : '/')

export default defineConfig({
  base,
  plugins: [
    vue(),
    tailwindcss(),
  ],
})
