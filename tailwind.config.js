/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
        colors: {
          primary: 'var(--font-primary)',
          muted: 'var(--font-muted)',
          inverted: 'var(--font-inverted)',
          card: 'var(--bg-card)',
          'card-hover': 'var(--bg-card-hover)',
          'border-primary': 'var(--border-primary)',
          'border-primary-hover': 'var(--border-primary-hover)',
          'border-muted': 'var(--border-muted)',
        },
    },
  },
  plugins: [],
};
