// 这是生产环境下使用的配置文件
// 这是开发环境下使用的配置文件
const { resolve } = require('path')
// 注意: 下载的loader直接使用即可,无需引入.但是插件,要下载,并且引入
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 单独将css抽取成css文件的插件
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// 压缩css
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
module.exports = {
  entry: './src/js/app.js', // 入口
  output: {
    filename: './js/app.js', //输出的文件的名称
    path: resolve(__dirname, '../dist'), //输出的文件所处的文件夹的路径
  },
  // 定义loader
  module: {
    rules: [
      // 处理less,并且将处理后的css整合到js汇总,最后将js中的css以内嵌的方式加到html中
      {
        test: /\.less$/, // 检查文件是否以.less结尾（检查是否是less文件）
        use: [
          // 数组中loader执行是从下到上，从右到左顺序执行
          // 'style-loader', // 创建style标签，添加上js中的css代码
          MiniCssExtractPlugin.loader, // 以link的形式引入css
          'css-loader', // 将css以commonjs方式整合到js文件中
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [
                require('postcss-flexbugs-fixes'),
                require('postcss-preset-env')({
                  autoprefixer: {
                    flexbox: 'no-2009', // display:flex之前个时期写的是display:flexbox. 这种写法现在不用了.所以要写no-2009
                  },
                  stage: 3, // 兼容性程度: 0, 1, 2, 3 值越大,表示兼容的程度越高
                }),
                require('postcss-normalize')(),
              ],
              sourceMap: true, //也要生成一个map文件
            },
          },
          'less-loader', // 将less文件解析成css文件
        ],
      },
      // 使用eslint检查js语法
      // 如果eslint检查时,发现有错误(其实并不要一定是语法错误.只是eslint检查时的一个错误等级). 那么webpack就不会执行后面的配置项
      {
        test: /\.js$/, //只检测js文件
        exclude: /node_modules/, //排除node_modules文件夹
        enforce: 'pre', //提前加载使用 1. pre 优先处理 2. normal 正常处理（默认)3. inline 其次处理 4. post 最后处理
        use: {
          //使用eslint-loader解析
          loader: 'eslint-loader',
        },
      },
      // 将es6的基本语法转成es6之前的,比如箭头函数
      // 配合core-js.让polyfill按需加载
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          // 注意: presets是一个数组,里面又套了一个数组
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  useBuiltIns: 'usage', // 按需引入(需要使用polyfill)
                  corejs: { version: 3 }, // 解决warning警告
                  targets: {
                    // 指定兼容性处理哪些浏览器
                    chrome: '58',
                    ie: '9',
                  },
                },
              ],
            ],
            cacheDirectory: true, // 开启babel缓存
          },
        },
      },

      // 使用file-loader和url-loader处理图片.如果图片较大,就不转base64,如果图片较小,就转base64
      {
        test: /\.(png|jpg|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            // limit: 8192, // 8kb --> 8kb以下的图片会base64处理
            // 打包图片之后,图片输出到dist文件夹的哪个位置
            outputPath: 'imgs', // 决定文件本地输出路径
            // 这个路径,是修改打包之后,less中请求图片的路径
            publicPath: '../imgs', // 决定图片的url路径
            name: '[hash:8].[ext]', // 修改文件名称 [hash:8] hash值取8位  [ext] 文件扩展名
          },
        },
      },

      // 处理html中引入的图片的路径
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
        },
      },
      // 使用file-loader处理文件
      {
        test: /\.(eot|svg|woff|woff2|ttf|mp3|mp4|avi)$/, // 处理其他资源
        loader: 'file-loader',
        options: {
          outputPath: 'media',
          name: '[hash:8].[ext]',
        },
      },
    ],
  },
  //定义插件
  plugins: [
    // 打包html
    new HtmlWebpackPlugin({
      template: './src/index.html', // 以当前文件为模板创建新的HtML(1. 结构和原来一样 2. 会自动引入打包的资源)
    }),
    // new HtmlWebpackPlugin(),
    // 将css额外引入到html中的插件
    new MiniCssExtractPlugin({
      filename: 'css/[name].css', //main
    }),
    // 压缩css
    new OptimizeCssAssetsPlugin({
      cssProcessorPluginOptions: {
        preset: ['default', { discardComments: { removeAll: true } }],
      },
      // cssProcessorOptions: {
      //   // 解决没有source map问题
      //   map: {
      //     inline: false,
      //     annotation: true,
      //   },
      // },
    }),
  ],

  mode: 'production', //模式: 生产模式 默认会压缩混淆 默认值
  //   mode: 'development', //模式: 开发环境 不会压缩混淆
}
