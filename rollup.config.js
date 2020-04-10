const commonjs = require('@rollup/plugin-commonjs')

export default {
  input: 'entry.js',
  plugins: [commonjs()],
  output: {
    file: 'bundle.js',
    format: 'cjs'
  }
};