const path = require('path')
import minify from 'vite-plugin-minify'

module.exports = {
  root: 'src',

  plugins: [
    minify({
      removeComments: true,
    }),
  ],

  base: 'https://rodricallea.github.io/Portfolio/',

  build: {
    outDir: '../dist',
  },

  resolve: {
    alias: {
      '@': path.join(__dirname, 'src'),
    },
  },
}
