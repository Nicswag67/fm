import type { Config } from 'tailwindcss'
const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a",
        foreground: "#e5e5e5",
        card: "#0f0f10",
        border: "#1f1f22",
        accent: "#00e28f"
      },
      boxShadow: {
        glass: "0 1px 0 0 rgba(255,255,255,.06) inset, 0 0 0 1px rgba(255,255,255,.04) inset, 0 10px 30px rgba(0,0,0,.35)",
      }
    }
  },
  plugins: []
}
export default config
