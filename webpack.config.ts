import webpack = require('webpack')

import * as path from 'path'

const HtmlWebpackPlugin = require('html-webpack-plugin')


const config: webpack.Configuration = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        main: './index.ts'
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.html$/,
                use: ['html-loader'],
            },
            {
                test: /\.(sass|scss)$/,
                use: ['style-loader', 'css-loader','sass-loader']
            },
            ]
    }
}

export default config
