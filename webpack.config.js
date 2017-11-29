// const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: './src/app.js',
    output: {
        path: __dirname + '/dist',
        filename: 'master.js'
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
        new ExtractTextPlugin("master.css"),
    ]
    // plugins: [
    //     new HtmlWebpackPlugin({
    //         title: 'Webpack app',
    //         hash: true,
    //         template: './src/index.ejs', // Load a custom template (ejs by default see the FAQ for details)
    //     })
    // ]
}
