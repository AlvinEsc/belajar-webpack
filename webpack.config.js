const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {
        // main: './src/index.js',
        // helo: './src/helo.js',
        main: {
            import: './src/index.js',
            dependOn: 'shared',
        },
        vendor: './src/vendor.js',
        helo: {
            import: './src/helo.js',
            dependOn: 'shared',
        },
        shared: 'lodash',
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },   
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/template.html',
        }),
    ],
    devtool: false,
    module: {
    rules: [
            {
                test: /\.(?:js|mjs|cjs)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env'],
                        ],
                    },
                },
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: 'asset/resource'
            }
        ],
    },
};