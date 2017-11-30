// const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
// var path = require('path');

// ----- Output file paths
var cssOutput = 'dist/master.css',
    jsOutput = 'dist/master.js';

module.exports = {
    entry: './src/app.js',
    output: {
        path: __dirname,
        filename: jsOutput
    },
    module: {
        rules: [
            { test: /\.scss$/, use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader","sass-loader"]
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin(cssOutput),
    ]
    // plugins: [
    //     new HtmlWebpackPlugin({
    //         title: 'Webpack app',
    //         hash: true,
    //         template: './src/index.ejs', // Load a custom template (ejs by default see the FAQ for details)
    //     })
    // ]
}
