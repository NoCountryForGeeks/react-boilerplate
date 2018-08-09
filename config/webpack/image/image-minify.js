module.exports = ({ gifsicle, mozjpeg, pngquant, webp } = {}) => {
	const gifsicleDefault = {
		interlaced: true,
		optimizationLevel: 3
	};
	const mozjpegDefault = {
		quality: 100
	};
	const pngquantDefault = {
		quality: 100,
		speed: 4
	};
	const webpDefault = {
		quality: 100
	};

	return {
		module: {
			rules: [
				{
					test: /\.(gif|png|jpe?g|webp|svg)$/i,
					use: {
						loader: 'image-webpack-loader',
						options: {
							gifsicle: Object.assign(gifsicleDefault, gifsicle),
							mozjpeg: Object.assign(mozjpegDefault, mozjpeg),
							pngquant: Object.assign(pngquantDefault, pngquant),
							webp: Object.assign(webpDefault, webp)
						}
					}
				}
			]
		}
	};
};
