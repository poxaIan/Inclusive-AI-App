module.exports = {
    presets: ['module:@react-native/babel-preset'],  // Usando o preset correto para React Native
    plugins: [
      ['module:react-native-dotenv', {
        'moduleName': '@env',
        'path': '.env',
      }]]};
