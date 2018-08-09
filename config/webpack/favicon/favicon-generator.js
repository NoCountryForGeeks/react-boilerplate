const WebappWebpackPlugin = require('webapp-webpack-plugin');

module.exports = ({ logo = '', prefix = '' }) => ({
	plugins: [
		new WebappWebpackPlugin({
			logo,
			prefix,
			cache: '.wwp-cache',
			inject: true
		})
	]
});
