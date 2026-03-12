/** @type {import('@tailwindcss/postcss').Config} */
export default {
  content: [
    './docs/**/*.md',
    './docs/.vitepress/**/*.{js,ts,vue}',
    './docs/.vitepress/theme/**/*.{js,ts,vue}',
  ],
  theme: {
    extend: {
      colors: {
        gradient: {
          from: '#0066cc',
          via: '#00ccff',
          to: '#00ff88',
        }
      },
      backgroundImage: {
        'gradient-liquid': 'linear-gradient(135deg, #0066cc 0%, #00ccff 50%, #00ff88 100%)',
        'gradient-hero': 'linear-gradient(135deg, #001a4d 0%, #003366 50%, #004d4d 100%)',
        'gradient-smooth': 'linear-gradient(180deg, rgba(0,102,204,0.1) 0%, rgba(0,204,255,0.05) 100%)',
      },
      keyframes: {
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'glow': {
          '0%, 100%': { boxShadow: '0 0 5px rgba(0, 204, 255, 0.3)' },
          '50%': { boxShadow: '0 0 20px rgba(0, 204, 255, 0.6)' },
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'fade-in': 'fade-in 0.6s ease-out',
      },
      borderRadius: {
        'xl': '20px',
        '2xl': '30px',
      }
    },
  },
  plugins: [],
}