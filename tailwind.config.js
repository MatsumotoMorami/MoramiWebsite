/** @type {import('tailwindcss').Config} */
export default {
  content:["./index.html","./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
      extend: {
          fontFamily: {
            'kawaii':['AaYuanWeiTuSi-2']
          },
          width: {
              '1/8': '12.5%',
              '7/8': '87.5%'
          }
    },
  },
  plugins: [],
}

