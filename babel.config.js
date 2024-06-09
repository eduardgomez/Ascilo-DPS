module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    env: {
      production: {
        plugins: ['react-native-paper/babel']
      }
    },
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            // This needs to be mirrored in tsconfig.json
            "@constants": "./src/constants",
            "@hooks": "./src/hooks",
            '@navigation': './src/navigation',
            '@components': './src/components',
            '@screens': './src/screens',
            '@modules': './src/modules',
            '@routes': './src/routes',
            "@services": "./src/services",
            "@styles": "./src/styles",
            "@types": "./src/types",
            "@utils": "./src/utils",
            "@models": "./src/models",
          }
        }
      ]
    ]
  };
};
