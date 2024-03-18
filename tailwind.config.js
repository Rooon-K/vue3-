/** @type {import('tailwindcss').Config} */
module.exports = {
  // 未使用的类名，不会打包到生产环境
  content: ["index.html", "./src/**/*.{html,js,ts,jsx,tsx,vue}"],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'nr': '880px',
      'mo': '966px',
      'lg': '1056px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  plugins: [],
};

