const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = ({ from, to }) => ({
	plugins: [
		new CopyWebpackPlugin([
			{
				from: `${from}/*.json`,
				to: to,
				flatten: true
			}
		])
	]
});
