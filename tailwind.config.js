import plugin from 'tailwindcss/plugin'

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./src/**/*.{html,js,ts,vue,css}"
	],
  theme: {
    colors: {
      'dark-grey': '#24232C',
      'grey': '#817D92',
      'almost-white': '#E6E5EA',
      'very-dark-grey': '#18171F',
      'neon-green': '#A4FFAF',
      'red': '#F64A4A',
      'orange': '#FB7C58',
      'yellow': '#F8CD65',
    },
    fontFamily: {
      jetbrains: ["'JetBrains Mono Variable'", "sans-serif"]
    }
  },
  plugins: [
    plugin(({ addUtilities, theme }) => {
      addUtilities({
        '.heading-l': {
          fontFamily: theme('fontFamily.jetbrains'),
          fontSize: '2rem',
        },
        '.heading-m': {
          fontFamily: theme('fontFamily.jetbrains'),
          fontSize: '1.5rem',
        },
        '.body': {
          fontFamily: theme('fontFamily.jetbrains'),
          fontSize: '1.125rem',
        }
      })
    })
  ],
}

