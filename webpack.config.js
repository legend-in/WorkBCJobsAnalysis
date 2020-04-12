var webpack = require("webpack");
const path = require('path');

module.exports = {
    // 1
    entry: './src/index.js',
    
    // 2
    module: {
        rules: [
          {
            test: /\.(js)$/,
            exclude: /node_modules/,
            use: [
              {
                  loader: 'babel-loader',
              }
            ]
          }
        ]
      },
      resolve: {
        extensions: ['*', '.js']
    },

    output: {
      path: __dirname + '/dist',
      publicPath: '/',
      filename: 'bundle.js'
    },
    // 3
    devServer: {
      contentBase: './dist'
    },

    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ]
};