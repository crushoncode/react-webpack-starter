const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// four core concepts: the entry point, the output, loaders, and plugins

module.exports = {
    //the entry point is where webpack starts bundling.
    entry: './src/js/index.js',
    // tell webpack where to save our bundle file
    output: {
    // use a method which is the path package - path.resolve
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js'
    },
    devServer: {
        contentBase: './dist'
    },
    // plugins allow us to do complex processing of our input files (html file)
    // copy javascript files and the source html into the distribution folder
    // just ref. plugins can be used to create a new html file from scratch automatically without providing any template.
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        })
    ]
}

