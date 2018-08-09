const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { removeLoaderIfExists } = require('../utils');

const fallbackLoader = 'style-loader';

module.exports = ({
	include,
	exclude,
	outputPath,
	use = [],
	plugins = []
} = {}) => ({
	module: {
		rules: [
			{
				include,
				exclude,
				test: /\.scss$/,
				use: [
					MiniCssExtractPlugin.loader,
					...removeLoaderIfExists(use, fallbackLoader)
				]
			}
		]
	},
	plugins: [
		...plugins,
		new MiniCssExtractPlugin({
			filename: `${outputPath}/[name].[contenthash].css`
		})
	]
});
