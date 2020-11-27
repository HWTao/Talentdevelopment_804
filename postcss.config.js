/* 移动端自动PX转REM不需要可以删 package.js -> postcss-pxtorem 一起删*/
module.exports = {
  plugins: {
    'autoprefixer': {
      overrideBrowserslist: ['Android >= 4.0', 'iOS >= 7']
    },
    'postcss-pxtorem': {
      rootValue:37.5,
      propList: ['*']
    }
  }
}