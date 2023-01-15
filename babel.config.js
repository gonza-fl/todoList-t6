module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: '.',
          extensions: ['.js', '.jsx', '.android.js'],
          alias: {
            '@components': './src/components',
            '@configs': './src/configs',
            '@helpers': './src/helpers',
            '@screens': './src/screens',
          },
        },
      ],
    ],
  };
};
