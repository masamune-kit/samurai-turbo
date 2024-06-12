const genSizes = () => {
  const generatedSizes = {};
  for (let i = 1; i <= 1500; ) {
    generatedSizes[i] = `${i}px`;
    if (i <= 200) {
      generatedSizes[`${i}rem`] = `${i}rem`;
    }
    i += 1;
    if (i > 110 && i < 225) i += 4;
    if (i > 225) i += 24;
  }
  return generatedSizes;
};

const genScales = () => {
  const generatedScales = {};
  for (let i = 1; i <= 200; i++) {
    generatedScales[i] = `${i / 100}`;
  }
  return generatedScales;
};

const sizes = genSizes();
const scales = genScales();

module.exports = {
  content: [
    // app content
    `src/**/*.{js,ts,jsx,tsx}`,
    '../../packages/ui/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      xs: '375px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1980px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000',
      white: { DEFAULT: '#ffffff', dark: '#F8F9FA', darker: '#E7EAF3' },
      primary: '#B371F6',
      secondary: '#1E2022',
      gray: {
        light: '#2a2838',
        DEFAULT: '#91939B',
        dark: '#4b5560',
        verydark: '#424b56',
        ultra: '#2b2b2b',
      },
      blue: {
        verylight: '#2d2b3c',
        light: '#171224',
        DEFAULT: '#181C2D',
        dark: '#082239',
        verydark: '#040014',
      },
      yellow: { DEFAULT: '#FFC300' },
      red: { light: '#E73A3A', DEFAULT: '#a92030' },
    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
      main: ['DMSans', 'sans-serif'],
      bold: ['Unbounded', 'sans-serif'],
    },
    scale: scales,
    fontSize: sizes,
    maxHeight: sizes,
    maxWidth: sizes,
    minWidth: sizes,
    extend: {
      zIndex: {
        '-1': '-1',
      },
      spacing: sizes,
      opacity: scales,
      animation: {
        fade: 'fadeOut 200ms ease-in-out',
        'spin-slow': 'spin 15s linear infinite',
      },
      keyframes: () => ({
        fadeOut: {
          '0%': { opacity: '0' },
          '100%': { opacity: '100' },
        },
      }),
      backgroundImage: {
        mesh: "url('../icons/svgs/background_mesh.svg')",
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
