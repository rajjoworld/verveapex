/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        // Brand palette extracted from the can photo
        // Primary (Purple can - main color)
        primary: {
          50: '#F4F1F9',
          100: '#E7DFF2',
          200: '#CDBCE3',
          300: '#B199D3',
          400: '#8E6ABF',
          500: '#5A2E8A', // main purple
          600: '#4C2676',
          700: '#3E1F61',
          800: '#2F174B',
          900: '#211035',
        },
        // Cream/tan can (left) – warm neutral accent
        tan: {
          50: '#FAF5EF',
          100: '#F2E6D6',
          200: '#E2CCB0',
          300: '#D3B389',
          400: '#C79C6E',
          500: '#B98554',
          600: '#9B6A42',
          700: '#7B5232',
          800: '#5A3C24',
          900: '#3C2818',
        },
        // Ginger ale can (right) – mustard/amber accent
        mustard: {
          50: '#FFF8E6',
          100: '#FFEFC2',
          200: '#FFDF85',
          300: '#FFCC4D',
          400: '#F8B826',
          500: '#F2B300',
          600: '#C98E00',
          700: '#9F6E00',
          800: '#744F00',
          900: '#4A3200',
        },
        // Sprite can – saturated green
        sodaGreen: {
          50: '#E6F7EF',
          100: '#C7EEDD',
          200: '#90E0BF',
          300: '#5BD39F',
          400: '#22C67D',
          500: '#00A651',
          600: '#008A44',
          700: '#006F37',
          800: '#00542A',
          900: '#003A1D',
        },
        // Lemon-lime accent printed on Sprite
        lime: {
          50: '#FDFFE6',
          100: '#F8FFC2',
          200: '#EEFF85',
          300: '#E1FF47',
          400: '#D7F000',
          500: '#C5DB00',
          600: '#A0B400',
          700: '#7A8A00',
          800: '#556000',
          900: '#323800',
        },
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        }
      },
      borderRadius: {
        'xl': '12px',
        '2xl': '16px',
        '3xl': '24px',
      }
    },
  },
  plugins: [],
}
