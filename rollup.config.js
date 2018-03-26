import resolve from 'rollup-plugin-node-resolve';

export default {
  input: 'esm/index.js',
  output: {
    file: 'dist/index.js',
    format: 'iife'
  },
  plugins: [ resolve() ]
};
