/*jslint es6 */
const defaultConfig = require("@wordpress/scripts/config/webpack.config");
const path = require('path');

module.exports = {
    ...defaultConfig,
    entry: {
        'px-section': './src/blocks/px-section/index.js',
        'px-grid': './src/blocks/px-grid/index.js'
    },
    output: {
        path: path.join(__dirname, './assets/gb/'),
        filename: 'blocks/[name]/index.js'
    }
};