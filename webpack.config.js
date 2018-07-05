const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// four core concepts: the entry point, the output, loaders, and plugins

module.exports = {
    //the entry point is where webpack starts bundling.
    entry: ['babel-polyfill', './src/js/index.js'],
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
    ],
    module: { 
    // rules receives an array of all of the loaders that we want to use.
    // for each of the loaders, we need the test property.    
        rules: [
            {
                //this test here will look for all of the files and test if they end in .js.
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
}

// babelrc:
// we have pass preset into this object and pass an array into preset
// a preset is a collection of code transform plugins
// which are like the pieces of code that actually apply the actual transformations to our code.

// why we need polyfill?
// there are some things that we cannot really convert because they simply were not present in the ES5 version of the language.
// eg. promises or methods like array.from.
