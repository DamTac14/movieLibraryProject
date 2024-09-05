module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
  ],
  plugins: [
    ['@babel/plugin-transform-react-jsx', { runtime: 'automatic' }],
  ],
  overrides: [
    {
      test: /\.cjs$/,
      plugins: ['@babel/plugin-transform-modules-commonjs'],
    },
  ],
};
