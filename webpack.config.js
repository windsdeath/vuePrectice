'use strict';

const VueLoaderPlugin = require('vue-loader/lib/plugin')
const path = require('path');

module.exports = {
    mode:'development',
    devtool:'eval',
    resolve:{
        extensions:['.js','.vue']
    },
    entry: './main.js',
    context: path.resolve(__dirname),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js',
        publicPath: 'pathOrUrlWhenProductionBuild'
    },
    module: {
        rules: [
            {test:/\.vue$/,
            loader:'vue-loader',}
        ]
    },
    resolve: {
    },
    devtool: 'source-map',
    plugins: [
        new VueLoaderPlugin(),
    ]
};
