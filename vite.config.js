import { fileURLToPath } from "node:url"
import { resolve } from "node:path"
import { defineConfig } from "vite"
import tailwindcss from "@tailwindcss/vite"

const root = fileURLToPath(new URL(".", import.meta.url))

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        home: resolve(root, "index.html"),
        pr: resolve(root, "pr.html"),
        sle: resolve(root, "sle.html"),
        privateCoaching: resolve(root, "private-coaching.html"),
        faq: resolve(root, "faq.html"),
        contact: resolve(root, "contact.html"),
        coaches: resolve(root, "coaches.html"),
      },
    },
  },
})
