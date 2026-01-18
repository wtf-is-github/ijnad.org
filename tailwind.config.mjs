/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'media',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#fafafa',      // Основной фон (светлый)
          dark: '#09090b',          // Основной фон (темный)
          muted: '#fafafa',         // Приглушенный фон (светлый)
          'muted-dark': '#18181b',  // Приглушенный фон (темный)
        },
        fg: {
          DEFAULT: '#09090b',       // Основной текст (светлый)
          dark: '#fafafa',          // Основной текст (темный)
          muted: '#71717a',         // Приглушенный текст (светлый)
          'muted-dark': '#a1a1aa', // Приглушенный текст (темный)
          subtle: '#a1a1aa',        // Очень приглушенный (светлый)
          'subtle-dark': '#71717a', // Очень приглушенный (темный)
        },
        border: {
          DEFAULT: '#e4e4e7',       // Границы (светлый)
          dark: '#3f3f46',         // Границы (темный)
          muted: '#f4f4f5',       // Приглушенные границы (светлый)
          'muted-dark': '#27272a', // Приглушенные границы (темный)
        },
        surface: {
          DEFAULT: '#ffffff',      // Поверхности/карточки (светлый)
          dark: '#18181b',         // Поверхности/карточки (темный)
          hover: '#fafafa',        // Hover состояние (светлый)
          'hover-dark': '#27272a', // Hover состояние (темный)
        },
        accent: {
          DEFAULT: '#09090b',      // Акцентные элементы (светлый)
          dark: '#fafafa',         // Акцентные элементы (темный)
          hover: '#27272a',        // Акцент hover (светлый)
          'hover-dark': '#e4e4e7', // Акцент hover (темный)
        },
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
