const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');


module.exports = {
	entry: './src/index.js',
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	devtool: 'inline-source-map',
	devServer: {
	    contentBase:'./dist',
	    port:'8088',
	    hot: true//使用 webpack-dev-server：模块热替换
	},//使用 webpack-dev-server：监听改动编译，并刷新浏览器
	plugins: [
		new CleanWebpackPlugin(['dist']),//在每次构建前清理 /dist 文件夹
		new HtmlWebpackPlugin({
			title:"Output Management"
		}),//重新生成index.html，来自动引用新的入口产生的bundle
		new webpack.HotModuleReplacementPlugin()
	],
	mode: "production",
	module: {
		rules: [
			//JSON 支持实际是内置的
			{
				test:/\.css$/,
				use:[
					'style-loader',
					'css-loader'
				]
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use:[
					'file-loader'
				]
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use:[
					'file-loader'
				]
			}
		]
	}
};