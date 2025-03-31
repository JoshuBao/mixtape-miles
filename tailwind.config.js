/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'float-medium': 'float 6s ease-in-out infinite',
        'float-fast': 'float 4s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'mixtape-primary-to-secondary': 'linear-gradient(to right, #2A9D8F, #E76F51)',
        'mixtape-secondary-to-tertiary': 'linear-gradient(to right, #E76F51, #F4A261)',
        'mixtape-tertiary-to-primary': 'linear-gradient(to right, #F4A261, #2A9D8F)',
        'mixtape-earth-tones': 'linear-gradient(to right, #3C6E71, #D9C2A7)',
        'mixtape-sunset': 'linear-gradient(to right, #E76F51, #F4A261)',
        'mixtape-forest': 'linear-gradient(to right, #2A9D8F, #3C6E71)',
        'mixtape-primary-vertical': 'linear-gradient(to bottom, #2A9D8F, rgba(42, 157, 143, 0.8))',
        'mixtape-secondary-vertical': 'linear-gradient(to bottom, #E76F51, rgba(231, 111, 81, 0.8))',
      },
      colors: {
        mixtape: {
          // Primary - Teal (Ocean/River color)
          primary: '#2A9D8F',
          'primary-50': 'rgba(42, 157, 143, 0.05)',
          'primary-100': 'rgba(42, 157, 143, 0.1)',
          'primary-200': 'rgba(42, 157, 143, 0.2)',
          'primary-300': 'rgba(42, 157, 143, 0.3)',
          'primary-400': 'rgba(42, 157, 143, 0.4)',
          'primary-500': 'rgba(42, 157, 143, 0.5)',
          'primary-600': 'rgba(42, 157, 143, 0.6)',
          'primary-700': 'rgba(42, 157, 143, 0.7)',
          'primary-800': 'rgba(42, 157, 143, 0.8)',
          'primary-900': 'rgba(42, 157, 143, 0.9)',
          
          // Secondary - Burnt Sienna (Sunset/Mountain color)
          secondary: '#E76F51',
          'secondary-50': 'rgba(231, 111, 81, 0.05)',
          'secondary-100': 'rgba(231, 111, 81, 0.1)',
          'secondary-200': 'rgba(231, 111, 81, 0.2)',
          'secondary-300': 'rgba(231, 111, 81, 0.3)',
          'secondary-400': 'rgba(231, 111, 81, 0.4)',
          'secondary-500': 'rgba(231, 111, 81, 0.5)',
          'secondary-600': 'rgba(231, 111, 81, 0.6)',
          'secondary-700': 'rgba(231, 111, 81, 0.7)',
          'secondary-800': 'rgba(231, 111, 81, 0.8)',
          'secondary-900': 'rgba(231, 111, 81, 0.9)',
          
          // Tertiary - Sandy Brown (Desert/Beach color)
          tertiary: '#F4A261',
          'tertiary-50': 'rgba(244, 162, 97, 0.05)',
          'tertiary-100': 'rgba(244, 162, 97, 0.1)',
          'tertiary-200': 'rgba(244, 162, 97, 0.2)',
          'tertiary-300': 'rgba(244, 162, 97, 0.3)',
          'tertiary-400': 'rgba(244, 162, 97, 0.4)',
          'tertiary-500': 'rgba(244, 162, 97, 0.5)',
          'tertiary-600': 'rgba(244, 162, 97, 0.6)',
          'tertiary-700': 'rgba(244, 162, 97, 0.7)',
          'tertiary-800': 'rgba(244, 162, 97, 0.8)',
          'tertiary-900': 'rgba(244, 162, 97, 0.9)',
          
          // Background and accent colors
          light: '#F8F9FA',
          dark: '#264653',
          cream: '#F5F5F5',
          paper: '#FFFFFF',
          sky: '#E0F7FA',
          mint: '#E0F2F1',
          coral: '#FFCCBC',
          sunlight: '#FFF8E1',
          forest: '#3C6E71',
          earth: '#D9C2A7',
          moss: '#687864',
          clay: '#BC6C25',
          text: '#264653',
          subtitle: '#5C7080',
        },
      },
      gradientColorStops: {
        'mixtape-primary': '#2A9D8F',
        'mixtape-secondary': '#E76F51',
        'mixtape-tertiary': '#F4A261',
        'mixtape-dark': '#264653',
        'mixtape-earth': '#D9C2A7',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}; 