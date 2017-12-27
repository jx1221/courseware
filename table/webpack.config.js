const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const rv = (...a)=>path.resolve(__dirname,...a);

module.exports = {
	entry:'./src/app.js',//入口文件
	output:{//打包完成之后要输出一个文件，输出到一个文件夹下，输出文件的名字
		path: rv('dist'),//如果找不到对应的文件夹，它在根目录下直接创建一个文件夹
		filename:'app.js'
	},
	//处理模块的内容
	module:{
		rules:[
			{
				test:/\.js$/,
				use:['babel-loader'],
				exclude: [
                    rv('node_modules')
                ]
			}
		]
	},
	plugins:[
		new HtmlWebpackPlugin({//自动帮我们创建html文件
			filename:'index.html',
			template:'./src/index.html'//以这个为模板
		}),
		new CleanWebpackPlugin(['dist'])//每次打包之前都把dist 的文件夹删掉，然后把新打包出来的东西放进去,它会
		//它会自己在根目录下创建一个文件夹
	]
}