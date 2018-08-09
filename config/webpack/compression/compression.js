const CompressionPlugin = require('compression-webpack-plugin');
const BrotliPlugin = require('brotli-webpack-plugin');

module.exports = (
	{ test, threshold, minRatio, cache } = {
		test: /\.(js|css|html|svg)$/,
		threshold: 0,
		minRatio: 0.8,
		cache: false
	}
) => ({
	plugins: [
		new CompressionPlugin({
			test,
			threshold,
			minRatio,
			cache,
			algorithm: 'gzip'
		}),
		new BrotliPlugin({
			test,
			threshold,
			minRatio
		})
	]
});
