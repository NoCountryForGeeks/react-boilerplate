const merge = require('webpack-merge');
const path = require('path');

const GitRevisionPlugin = require('git-revision-webpack-plugin');
process.traceDeprecation = true
const {
    banner,
    cleaner,
    cssLoader,
    cssLoaderStrategy,
    cssExtract,
    cssMinify,
    devServer,
    faviconGenerator,
    fontLoader,
    generateSourceMaps,
    hotModuleReplacement,
    htmlUseTemplate,
    imageLoader,
    imageMinify,
    manifestPlugin,
    offlinePlugin,
    optimizeExtendedAPI,
    optimizeChunk,
    optimizeHashedModuleIds,
    optimizeModuleConcatenation,
    optimizePerformance,
    jsLoader,
    jsMinifyer,
    compression,
    jsScriptLoader,
    linterCss,
    linterJS,
    loadLanguages,
    reportAnalyzer,
    svgSpriteLoader
} = require('./config/webpack');

const ENVIROMENTS = Object.freeze({
    DEVELOPMENT: 'development',
    PRODUCTION: 'production'
});

const PATHS = Object.freeze({
    ROOTFOLDER: path.resolve(__dirname, '/'),
    APPFOLDER: path.join(__dirname, 'app'),
    OUTPUTFOLDER: path.join(__dirname, 'build'),
    HTMLTEMPLATE: path.join(__dirname, 'index.template.html'),
    NODE_MODULES: path.join(__dirname, 'node_modules'),
    FONTSFOLDER: path.join(__dirname, 'app/content/fonts'),
    LANGUAGESFOLDER: path.join(__dirname, 'app/content/i18n'),
    REPORTFOLDER: path.join(__dirname, 'reports'),
    STATICSFOLDER: 'statics',
    LANGUAGEOUTPUT: 'content/i18n',
    FONTSOUTPUT: 'content/fonts',
    IMAGEOUTPUT: 'content/images',
    ANALYZERSTATS: 'analyzer-stats.json',
    ANALYZERREPORT: '/analyzer-report.html',
    FAVICON: './app/content/favicon/favicon.svg',
    FAVICONOUTPUT: 'content/favicons',
    SVGSPRITE: 'content/sprites/svg/sprite-[hash:6].svg'
});

const alias = Object.freeze({
    app: PATHS.APPFOLDER,
    shared: path.join(PATHS.APPFOLDER, 'shared'),
    state: path.join(PATHS.APPFOLDER, 'state'),
    assets: path.join(PATHS.APPFOLDER, 'content/assets')
});

const commonConfiguration = () =>
    merge([
        {
            output: {
                path: PATHS.OUTPUTFOLDER,
                publicPath: '/',
                filename: `${PATHS.STATICSFOLDER}/[name].[hash].js`
            },
            resolve: { alias }
        },
        jsLoader({ include: PATHS.APPFOLDER, exclude: PATHS.NODE_MODULES }),
        jsScriptLoader(),
        fontLoader({
            include: PATHS.FONTSFOLDER,
            outputPath: PATHS.FONTSOUTPUT
        }),
        imageLoader({
            outputPath: PATHS.IMAGEOUTPUT,
            exclude: [
                /*Here should go sprite selectors to exclude to be procesed by svgspriteLoader*/
            ]
        }),
        linterJS({ include: PATHS.APPFOLDER }),
        linterCss({ include: PATHS.APPFOLDER }),
        loadLanguages({
            from: PATHS.LANGUAGESFOLDER,
            to: `${PATHS.OUTPUTFOLDER}/${PATHS.LANGUAGEOUTPUT}`
        }),
        svgSpriteLoader({
            include: [
                /* Here should use SVG Sprite matching */
            ],
            spriteFilename: PATHS.SVGSPRITE
        }),
        faviconGenerator({
            logo: PATHS.FAVICON,
            prefix: `${PATHS.FAVICONOUTPUT}/[hash]-`
        }),
    ]);

const developmentConfiguration = () =>
    merge([
        {
            mode: ENVIROMENTS.DEVELOPMENT,
            entry: {
                app: [ PATHS.APPFOLDER ]
            }
        },
        cssLoader({ use: cssLoaderStrategy({ hashedLocalIndentName: false }) }),
        devServer({
            host: '0.0.0.0',
            port: 8080,
            open: false,
            stats: 'errors-only'
        }),
        hotModuleReplacement(),
        htmlUseTemplate({ template: PATHS.HTMLTEMPLATE }),
        generateSourceMaps({ sourceMapType: 'source-map' })
    ]);

const productionConfiguration = () =>
    merge([
        {
            mode: ENVIROMENTS.PRODUCTION,
            entry: {
                app: PATHS.APPFOLDER
            }
        },
        htmlUseTemplate({ template: PATHS.HTMLTEMPLATE }),
        jsMinifyer(),
        optimizeChunk(),
        generateSourceMaps({ sourceMapType: 'source-map' }),
        cssExtract({
            outputPath: PATHS.STATICSFOLDER,
            use: cssLoaderStrategy({ hashedLocalIndentName: true }),
            plugins: cssMinify()
        }),
        imageMinify(),
        cleaner({
            paths: [ PATHS.OUTPUTFOLDER, PATHS.REPORTFOLDER ],
            options: { root: PATHS.ROOTFOLDER }
        }),
        optimizeHashedModuleIds(),
        optimizeModuleConcatenation(),
        optimizePerformance({
            hints: 'warning',
            maxEntrypointSize: 100000,
            maxAssetSize: 450000
        }),
        reportAnalyzer({
            analyzerMode: 'static',
            reportFilename: `${PATHS.REPORTFOLDER}/${PATHS.ANALYZERREPORT}`,
            defaultSizes: 'stat',
            openAnalyzer: false,
            generateStatsFile: true,
            statsFilename: `${PATHS.REPORTFOLDER}/${PATHS.ANALYZERSTATS}`
        }),
        banner({ 
            exclude: /\.svg$/,
            banner: `NC4G \nVersion: ${new GitRevisionPlugin().version()}`
        }),
        manifestPlugin(),
        offlinePlugin(),
        optimizeExtendedAPI(),
        compression()
    ]);

module.exports = env => {
    if (env === ENVIROMENTS.PRODUCTION) {
        return merge(commonConfiguration(), productionConfiguration());
    }
    return merge(commonConfiguration(), developmentConfiguration());
};
