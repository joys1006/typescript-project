var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var rootAssetPath = path.resolve(__dirname, '../dist');
var port = 3000;

module.exports = {
    entry: {
        app: ['whatwg-fetch','@babel/polyfill','./src/app.ts']
    },
    output: {
        path: rootAssetPath,
        filename: '[name].js'
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: [".ts", ".tsx", ".js"]
    },
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        host: 'localhost',
        port: port,
        contentBase: __dirname,
        proxy: {
            '/api/**': {
                target: 'http://localhost:9999',
                secure: false,
                changeOrigin: true
            }
        }
    },
    devtool: "source-map",
    module: {
      rules: [
          {
            test: /\.(ts?)|(js)$/,
            loader: require.resolve('babel-loader'),
            exclude: /node_modules/
          },
          {
            test: /\.ts$/,
            loader: 'ts-loader',
            options: { reportFiles: ['src/**/*.{ts,tsx}', '!src/skip.ts'] }
          }
      ]
    }
};