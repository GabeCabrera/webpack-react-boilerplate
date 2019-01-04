const webpack = require('webpack');

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		path: __dirname + '/output',
		publicPath: '/',
		filename: 'bundle.js'
	},
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /node_modules/,
			use: ['babel-loader']
		}
		]
	},
	resolve: {
		extensions: ['*', '.js']
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
	devServer: {
		contentBase: './output',
		hot: true
	}
};