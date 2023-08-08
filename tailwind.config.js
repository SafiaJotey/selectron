/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      primary: 'red',
      secondary: 'black',
      subsidery: '#44464b',
      base: '#b3b3b3',
      white: '#fff',
      overlay: 'rgb(255,1,0,.2)',
    },
    extend: {
      backgroundImage: {
        cover1: "url('https://i.ibb.co/qpVMzpN/cover1.jpg')",

        cover2: "url('https://i.ibb.co/gZ3PGsQ/cover2.jpg')",
        cover3: "url('https://i.ibb.co/DtDFcGB/cover3.jpg')",
        cover4: "url('https://i.ibb.co/DG4Jtyc/cover4.jpg')",
        cover5: "url('https://i.ibb.co/MDySs55/cover5.jpg')",
        cover6: "url('https://i.ibb.co/wMQ1tGL/cover6.jpg')",
        cover7: "url('https://i.ibb.co/2sWWgBN/cover7.jpg')",
      },
    },
  },
  plugins: [],
};
