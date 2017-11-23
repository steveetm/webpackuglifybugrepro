const path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: require.resolve("./main.js"),
    output: {
        path: path.resolve(__dirname),
        filename: "bundle.js"
    },
    devtool: "sourcemap",
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                  options: {
                                presets: [
                                    ['env', {
                                        targets: [{
                                            browsers: ['last 2 versions'],
                                            modules: false
                                        }, {name: 'ios', version: 9}],
                                    }]],
                                plugins: ['transform-remove-strict-mode', 'transform-exponentiation-operator'],
                                ignore: ['client/vendor/sdk/ext'],

                            },
            }
        ]
    },
    plugins: [
	new HtmlWebpackPlugin(), 
	new UglifyJsPlugin({sourceMap: true})
    ]

};