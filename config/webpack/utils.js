const removeLoaderIfExists = (loaders, loaderName) =>
	loaders.filter(
		loader => loader !== loaderName && loader.loader !== loaderName
	);

module.exports = {
	removeLoaderIfExists
};
