// overide 这个函数是用来修改webpack配置项的函数
// fixBabelImports 是用来让antd-mobile按需加载的方法
const {
  override,
  fixBabelImports,
  addPostcssPlugins,
} = require('customize-cra')
module.exports = override(
  // antd-mobile 会按需加载
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: 'css',
  }),
  // rem适配. 将我们自己写的px改为rem
  // remUnit: 37.5  这个37.5是表示ip6手机根字体的大小. 此时表示使用方式二的方式
  // remUnit: 100  这个100是表示ip6手机根字体的大小. 此时表示使用方式一的方式
  addPostcssPlugins([require('postcss-px2rem')({ remUnit: 100 })])
)
