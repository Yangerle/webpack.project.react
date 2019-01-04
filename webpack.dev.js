const path = require('path');

const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');


module.exports = merge(common, {
	output: {
		filename: '[name].chunk.js',
		chunkFilename: '[name].chunk.js',//它决定非入口 chunk 的名称(此项会对缓存配置有影响，先注释掉)
		path: path.resolve(__dirname, 'dist')
	},
	mode: 'development',
	devtool: 'inline-source-map',
	devServer: {
		contentBase: './dist',
		port:'8088',
		hot: true//使用 webpack-dev-server：模块热替换
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
});