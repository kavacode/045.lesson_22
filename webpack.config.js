const path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/dist/',
	 },
  devServer: {
	static: {
	  directory: path.join(__dirname, "public"),
	},
	compress: true,
	port: 8080,
 },
};