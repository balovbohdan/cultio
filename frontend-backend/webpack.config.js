const path = require('path');
const nodeExternals = require('webpack-node-externals');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const c = require('./config');

module.exports = {
    target: 'node',
    name: 'server',
    mode: 'development',
    context: __dirname,
    node: {
        __dirname: true,
        __filename: true
    },
    externals: [nodeExternals({
        whitelist: ['webpack/hot/poll?1000']
    })],
    optimization: { minimize: false },
    entry: path.join(__dirname, 'src/index.tsx'),
    output: {
        filename: 'index.js',
        chunkFilename: '[id].js?v='+ c.v,
        path: path.join(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx', '.jsx', '.css', '.json'],
        plugins: [
            new TsconfigPathsPlugin({
                baseUrl: 'src',
                configFile: 'tsconfig.json'
            })
        ]
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    compact: false
                }
            },
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            },
        ]
    }
};