const path = require('path');

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
    }
}