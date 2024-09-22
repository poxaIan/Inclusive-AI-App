module.exports = {
  root: true,
  extends: '@react-native',
  parser: '@babel/eslint-parser',  // Define o parser do Babel para ESLint
  parserOptions: {
    requireConfigFile: false,  // Desativa a verificação do arquivo de configuração do Babel
  },
  env: {
    es6: true,
    node: true,
  },
  rules: {
    // Aqui você pode adicionar regras personalizadas de ESLint, se necessário
  },
};
