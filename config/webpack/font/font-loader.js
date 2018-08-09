module.exports = ({ include, exclude, outputPath } = {}) => ({
	module: {
		rules: [
			{
				include,
				exclude,
				test: /\.(eot|svg|ttf|woff|woff2)$/,
				loader: 'file-loader',
				options: {
					name: `${outputPath}/[name].[hash].[ext]`
				}
			}
		]
	}
});
