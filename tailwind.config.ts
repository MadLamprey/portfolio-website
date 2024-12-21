import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-in-out forwards",
        "title": "title 2s ease-in forwards"
      },
      keyframes: {
        "fade-in": {
          '0%': {
            opacity: '0%'
          },
          '75%': {
            opacity: '0%'
          },
          '100%': {
            opacity: '100%'
          }
        },
        "title": {
          '0%': {
            'line-height': '0%',
            'letter-spacing': '0.25em',
            opacity: '0'
          },
          '25%': {
            'line-height': '0%',
            opacity: '0%'
          },
          '80%': {
            opacity: '100%'
          },
          '100%': {
            'line-height': '100%',
            opacity: '100%'
          }
        }
      }
    },
  },
  plugins: [],
} satisfies Config;
