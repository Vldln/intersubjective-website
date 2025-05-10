module.exports = {
  plugins: {
    'tailwindcss/nesting': {},
    'tailwindcss': {},
    'autoprefixer': {},
    'cssnano': {
      preset: [
        'default',
        {
          discardComments: {
            removeAll: true,
          },
          minifyFontValues: true,
          colormin: true,
          reduceIdents: false,
          discardUnused: false,
        }
      ]
    }
  },
};
