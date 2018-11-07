module.exports = (baseConfig, env, defaultConfig) => {
  // make sure you have babel-loader@8 installed and @babel/core@7
  defaultConfig.module.rules[0].loader = require.resolve('babel-loader')

  return defaultConfig
}
