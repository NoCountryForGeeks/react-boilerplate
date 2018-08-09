const cssAutoprefix = require('./css-autoprefix');

module.exports = ({ hashedLocalIndentName = true }) => [
	'style-loader',
	{
		loader: 'css-loader',
		options: {
			importLoaders: 1,
			modules: true,
			localIdentName: hashedLocalIndentName
				? 'nc4g_[hash:base64:4]'
				: '[local]_[name]'
		}
	},
	cssAutoprefix(),
	'sass-loader'
];
