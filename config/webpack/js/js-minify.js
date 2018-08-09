const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = ({ include, exclude } = {}) => ({
	optimization: {
		minimizer: [
			new UglifyJSPlugin({
				include,
				exclude,
				cache: true,
				sourceMap: true,
				parallel: 4,
				uglifyOptions: {
					safari10: false
				}
			})
		]
	}
});
