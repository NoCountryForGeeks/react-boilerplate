var OfflinePlugin = require('offline-plugin');

module.exports = () => ({
	plugins: [
		new OfflinePlugin({
			publicPath: '/',
			caches: 'all',
			externals: [ '/' ],
			ServiceWorker: {
				navigateFallbackURL: '/'
			},
			AppCache: {
				FALLBACK: {
					'/': '/offline-page.html'
				}
			}
		})
	]
});
