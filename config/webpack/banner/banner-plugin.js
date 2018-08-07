const webpack = require('webpack');

module.exports = ({ exclude, banner }) => ({
	plugins: [
		new webpack.BannerPlugin({
			exclude,
			banner
		})
	]
});
