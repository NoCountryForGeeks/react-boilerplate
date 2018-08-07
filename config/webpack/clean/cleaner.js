const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = ({ paths, options }) => ({
	plugins: [ new CleanWebpackPlugin(paths, options) ]
});
