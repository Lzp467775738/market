/**
 * Created by heych on 2016/8/11.
 */
var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var LIBS = __dirname + '/src/app/lib';

module.exports = {
    entry: {
        index: __dirname +"/src/app/index.js",
        vendors:[
            path.resolve(LIBS, 'jquery-1.11.0.js')
        ]
    },

    output: {
        filename: '[name].js',
        path: __dirname + "/build",
        //path: __dirname + "/pages",
        // publicPath : __dirname + "/build"
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query:
                {
                    presets:['es2015', 'react']
                }
            },
            {
                test: /\.html$/,
                loader: "ejs",
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader","css-loader?sourceMap")
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader?sourceMap")
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'file?name=imgs/[sha512:hash:base64:6]_[name].[ext]',
                exclude:/(node_modules)/
            },
        ],
        noParse:[
            LIBS + '/jquery-1.11.0.js',
        ]
    },

    resolve:{
        extentions:["",".js", ".jsx"],
        alias: {
            'jquery': LIBS + '/jquery-1.11.0.js',
            'jQuery': LIBS + '/jquery-1.11.0.js',
            '$': LIBS + '/jquery-1.11.0.js',
            'window.jquery': LIBS + '/jquery-1.11.0.js',
            'window.jQuery': LIBS + '/jquery-1.11.0.js',
            'window.$': LIBS + '/jquery-1.11.0.js'
        }
    },

    babel: {
        "presets": ['es2015','react']
    },

    devServer:{
        contentBase: './src/pages',
        inline:true,
        hot: true,
        colors: true,
        historyApiFallback:true,
        port: 3030
    },

    devtool: 'eval-source-map',

    plugins: [
        new ExtractTextPlugin("[name].css"),
        new webpack.ProvidePlugin({
            'jquery': LIBS + '/jquery-1.11.0.js',
            'jQuery': LIBS + '/jquery-1.11.0.js',
            '$': LIBS + '/jquery-1.11.0.js',
            'window.jquery': LIBS + '/jquery-1.11.0.js',
            'window.jQuery': LIBS + '/jquery-1.11.0.js',
            'window.$': LIBS + '/jquery-1.11.0.js',
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
    ]
}
