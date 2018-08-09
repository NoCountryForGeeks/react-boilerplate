module.exports = ({ include, exclude, use = [] } = {}) => ({
	module: {
		rules: [
			{
				include,
				exclude,
				use,
				test: /\.scss$/
			}
		]
	}
});
