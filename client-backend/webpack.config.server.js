const path = require('path');
const nodeExternals = require('webpack-node-externals');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const c = require('./config');
const tsconfig = path.join(__dirname, 'tsconfig.json');

module.exports = {
    target: 'node',
    name: 'server',
    mode: 'development',
    context: __dirname,
    node: {
        __dirname: true,
        __filename: true
    },
    externals: [
        nodeExternals({
            whitelist: ['webpack/hot/poll?1000']
        })
    ],
    optimization: { minimize: false },
    entry: path.join(__dirname, 'src/server.tsx'),
    output: {
        filename: 'server.js',
        chunkFilename: '[id].js?v=' + c.v,
        path: path.join(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx', '.jsx', '.css', '.json'],
        plugins: [
            new TsconfigPathsPlugin({
                baseUrl: 'src',
                configFile: tsconfig
            })
        ]
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'node-style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    compact: false
                }
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                options: {
                    configFile: tsconfig,
                    compilerOptions:{
                        module: 'commonjs'
                    }
                }
            },
            {
                loader: 'url-loader',
                test: /\.(woff2?)|(ttf)$/,
                options: {
                    publicPath: 'static/assets/fonts',
                    name: c.devMode
                        ? '[name].[ext]'
                        : '[name]-[hash].[ext]'
                }
            },
            {
                loader: 'file-loader',
                test: /\.svg$/,
                options: {
                    publicPath: 'static/assets/img',
                    name: c.devMode
                        ? '[name].[ext]'
                        : '[name]-[hash].[ext]'
                }
            }
        ]
    }
};