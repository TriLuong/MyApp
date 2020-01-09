module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.ios.js', '.android.js', '.js', '.json'],
        alias: {
          '@App': './src/App',
          '@Screens': './src/Screens',
          // '@Assets': './src/Assets',
          // '@Components': './src/Components',
          // '@Localization': './src/Localization',
          // '@Models': './src/Models',
          // '@Navigation': './src/Navigation',
          // '@ReduxManager': './src/ReduxManager',
          // '@Services': './src/Services',
          // '@Types': './src/Types',
          // '@Utils': './src/Utils',
          // '@Styles': './src/Styles',
        },
      },
    ],
  ],
};
