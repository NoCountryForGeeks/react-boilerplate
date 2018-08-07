const nodeModulesRegex = /(node_modules)/;
const testDefault = /\.js$/;

module.exports = (
	{ include, exclude = nodeModulesRegex, test = testDefault } = {
		exclude: nodeModulesRegex,
		test: testDefault
	}
) => ({
	module: {
		rules: [
			{
				include,
				exclude,
				test,
				loader: 'babel-loader',
				options: {
					cacheDirectory: true
				}
			}
		]
	}
});
