module.exports = () => ({
	loader: 'postcss-loader',
	options: {
		plugins: () => [ require('autoprefixer')() ]
	}
});
