module.exports = () => ({
	optimization: {
		splitChunks: {
			cacheGroups: {
				vendors: {
					test: /[\\/]node_modules[\\/]/,
					priority: 10,
					chunks: 'all',
					name: 'vendors',
					enforce: true
				},
				scripts: {
					test: /\.exec\.js$/,
					priority: -15
				}
			}
		}
	}
});
