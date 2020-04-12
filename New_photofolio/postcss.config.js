const postcssPresetEnv = require('postcss-preset-env')

const config = () => ({
  plugins: [
    postcssPresetEnv({
      stage: 0,
      features: {
        'nesting-rules': true,
      }
    }),
    require('postcss-color-function'),
    require('postcss-nested'),
    require('postcss-focus-visible'),
    require('postcss-selector-matches'),
    require('postcss-color-mod-function')
  ],
})

module.exports = config