const webpack = require('webpack'),
    path = require('path');

module.exports = {
    entry: "./src/entry.js",
    output: {
        path: './bin',
        publicPath: 'bin/',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { 
                test: /\.css$/, 
                loader: "style!css" 
            },
            {
                test: /\.scss$/,
                loaders: ["style", "css", "sass"]
            },
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.vue'],
        fallback: [path.join(__dirname, '../node_modules')],
        alias: {
            'src': path.resolve(__dirname, './src'),
            'components': path.resolve(__dirname, './src/components')
        }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};
