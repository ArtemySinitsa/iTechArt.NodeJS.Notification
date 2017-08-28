var path = require('path');
var webpack = require('webpack');

module.exports = {
	context: path.resolve(__dirname, 'src'),
	entry: './index.js',
	output: {
		path: path.join(__dirname, '/dist/js'),
		filename: 'bundle.js'
	},
	devServer: {
		contentBase: './dist',
		historyApiFallback: true
	},
	module: {
		loaders: [
			{
				test: /.js?$/,
				loader: 'babel-loader',
				include: path.join(__dirname, 'src'),
				query: {
					presets: ['es2015', 'react'],
					plugins: ['transform-class-properties']
				}
			},
			{
				test: /\.css$/,
				loaders: ['style', 'css']
			}
		]
	},
};
