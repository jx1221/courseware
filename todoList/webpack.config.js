const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin= require('clean-webpack-plugin');


const rv = (...a) => path.resolve(__dirname,...a);
module.exports = {
  entry:'./src/app.js',
  output:{
      path: rv('dist'),
      filename: 'app.js'
  },
  devtool:'eval-source-map',
    //加上这句话，就会知道源码在哪里出错了
  module:{
      rules:[
          {
              test:/\.js$/,
              // use:'babel-loader',
              use:[
                  {
                      loader:'babel-loader',
                      options:{
                          presets:['react'],
                          plugins:['transform-object-rest-spread']
                      }
                  }
              ],
              exclude:rv('node_modules')
          },
          {
              test:/\.css$/,
              use:['style-loader','css-loader']
          },
          {
              test:/\.(jpg|png|gif|jpeg)$/,
              use:['file-loader']
          }
      ]
  },
    plugins:[
        new HtmlWebpackPlugin({
            filename:'index.html',
            template:'./src/index.html'
        }),
        new CleanWebpackPlugin(
            ['dist']
        )
    ],
    devServer:{
      open:true
    }
};