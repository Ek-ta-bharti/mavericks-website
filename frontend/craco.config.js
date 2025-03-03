const { addBeforeLoader, loaderByName } = require('@craco/craco');

module.exports = {
    webpack: {
        configure: (webpackConfig) => {
            const sourceMapLoaderRule = {
                test: /\.js$/,
                enforce: 'pre',
                use: ['source-map-loader'],
                exclude: /node_modules\/@mediapipe\/tasks-vision/,
            };
            addBeforeLoader(webpackConfig, loaderByName('source-map-loader'), sourceMapLoaderRule);
            return webpackConfig;
        },
    },
};