module.exports = ({ include, exclude = /(node_modules)/ }) => ({
	module: {
		rules: [
			{
				include,
				exclude,
				test: /\.js$/,
				enforce: 'pre',
				loader: 'eslint-loader',
				options: {
					quiet: true,
					failOnError: true
				}
			}
		]
	}
});
