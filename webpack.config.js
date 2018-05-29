const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	watch: true,

	entry: './client/main.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: './bundle.js'
	},

	plugins: [
		new HtmlWebpackPlugin({
			hash: true,
			template: './client/index.html',
			filename: './index.html'
		})
	],

	resolve: {
		alias: {
      'vue': 'vue/dist/vue.common.js'
		}
	}
};
