/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        // New Professional Color Palette
        primary: {
          DEFAULT: '#1E3A5F',     // Deep Navy
          light: '#2B4C7E',       // Lighter navy
          dark: '#152D47',        // Darker navy
        },
        secondary: {
          DEFAULT: '#0891B2',     // Teal/Cyan
          light: '#06B6D4',       // Lighter teal
          dark: '#0E7490',        // Darker teal
        },
        accent: {
          DEFAULT: '#F59E0B',     // Amber/Gold
          hover: '#D97706',       // Darker amber for hover
          light: '#FCD34D',       // Lighter amber
        },
        /* Added accent-* aliases used in pages/programs to match utility classes like bg-accent-yellow, bg-accent-purple, etc. */
        'accent-yellow': '#F59E0B', // matches accent.DEFAULT
        'accent-purple': '#8B5CF6', // brand.purple
        'accent-peach': '#FB923C',  // brand.coral / peach tone
        'accent-green': '#10B981',  // matches success/emerald
        success: '#10B981',       // Green
        background: '#F8FAFC',    // Light gray-white
        surface: '#FFFFFF',       // White
        text: {
          primary: '#1E293B',     // Dark slate
          secondary: '#64748B',   // Medium gray
          light: '#FFFFFF',       // White text
          muted: '#94A3B8',       // Muted gray
        },
        border: {
          DEFAULT: '#E2E8F0',     // Light border
          dark: '#CBD5E1',        // Darker border
        },

        // Keep brand colors for legacy compatibility
        brand: {
          ocean: '#1E3A5F',       // Now matches primary
          blue: '#07294c',        // Now matches secondary
          'blue-light': '#06B6D4',
          orange: '#F97316',
          coral: '#FB923C',
          amber: '#F59E0B',       // Now matches accent
          teal: '#14B8A6',
          emerald: '#10B981',     // Now matches success
          purple: '#8B5CF6',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
        syne: ['Syne', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'Inter', 'sans-serif'],
      },
      fontSize: {
        // Modern responsive type scale
        'hero': ['clamp(2.5rem, 5vw, 4.5rem)', { lineHeight: '1.1', fontWeight: '800', letterSpacing: '-0.02em' }],
        'h1': ['clamp(2rem, 4vw, 3rem)', { lineHeight: '1.2', fontWeight: '700', letterSpacing: '-0.01em' }],
        'h2': ['clamp(1.75rem, 3vw, 2.25rem)', { lineHeight: '1.3', fontWeight: '600' }],
        'h3': ['clamp(1.5rem, 2.5vw, 1.875rem)', { lineHeight: '1.4', fontWeight: '600' }],
        'h4': ['1.5rem', { lineHeight: '1.4', fontWeight: '600' }],
        'body-xl': ['1.25rem', { lineHeight: '1.7' }],
        'body-lg': ['1.125rem', { lineHeight: '1.7' }],
        'body': ['1rem', { lineHeight: '1.6' }],
        'body-sm': ['0.875rem', { lineHeight: '1.6' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      boxShadow: {
        'soft': '0 2px 8px rgba(0, 0, 0, 0.04)',
        'card': '0 4px 16px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 12px 32px rgba(0, 0, 0, 0.12)',
        'button': '0 4px 12px rgba(59, 130, 246, 0.3)',
        'button-hover': '0 8px 24px rgba(59, 130, 246, 0.4)',
        'glow': '0 0 20px rgba(59, 130, 246, 0.3)',
        'xl-soft': '0 20px 40px rgba(0, 0, 0, 0.1)',
      },
      borderRadius: {
        'card': '1rem',
        'button': '0.75rem',
        'xl': '1.5rem',
        '2xl': '2rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in-down': 'fadeInDown 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'bounce-subtle': 'bounceSubtle 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'gradient-x': 'gradientX 3s ease infinite',
        'gradient-y': 'gradientY 3s ease infinite',
        'spin-slow': 'spin 3s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        gradientX: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        gradientY: {
          '0%, 100%': { backgroundPosition: '50% 0%' },
          '50%': { backgroundPosition: '50% 100%' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'shimmer': 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
      },
      backgroundSize: {
        '300%': '300%',
      },
      transitionDuration: {
        'smooth': '300ms',
      },
      transitionTimingFunction: {
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
