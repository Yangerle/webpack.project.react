const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	entry: {
		index: './src/index.js',
		"another-module": './src/another-module.js'
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'haha'
		}),
		new webpack.HashedModuleIdsPlugin(),
		new webpack.ProvidePlugin({
			// _: 'lodash',
			join: ['lodash', 'join']

		}),
	],
	optimization: {
		splitChunks: {
			chunks: 'all',
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendors',
					chunks: 'all'
				}
			}
		},
		runtimeChunk: 'single'
	},
	module: {
		rules: [

			{
				test: require.resolve('./src/globals.js'),
				use: 'exports-loader?file,parse=helpers.parse'
			},

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