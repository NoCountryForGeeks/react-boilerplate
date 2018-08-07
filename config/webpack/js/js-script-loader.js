const testDefault = /\.exec\.js$/;

module.exports = ({ test = testDefault } = { test: testDefault }) => ({
	module: {
		rules: [
			{
				test,
				loader: 'script-loader'
			}
		]
	}
});
