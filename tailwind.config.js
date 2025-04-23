/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue"
  ],
  theme: {
    extend: {
      colors: {
        'azure': {
          '12': '#071c34',
          '18': '#12294A',
          '22': '#10243E',
          '84': '#d6e8ff'
        },
        'gray': {
          '98-5': 'rgba(245, 249, 255, 0.05)'
        },
        'rose': {
          '52': '#E91E63'
        }
      },
      backgroundColor: {
        'white-low-opacity': 'rgba(255, 255, 255, 0.1)'
      },
      fontFamily: {
        'jost': ['Jost', 'sans-serif']
      }
    }
  },
  plugins: []
}