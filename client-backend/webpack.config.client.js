const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const c = require('./config');
const tsconfig = path.join(__dirname, 'tsconfig.json');

module.exports = {
    target: 'node',
    name: 'client',
    mode: 'development',
    context: __dirname,
    entry: path.join(__dirname, 'src/client.tsx'),
    node: {
        __dirname: true,
        __filename: true
    },
    optimization: {
        minimize: false
    },
    output: {
        filename: 'client.js',
        chunkFilename: '[id].js?v=' + c.v,
        path: path.join(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx', '.jsx', '.css'],
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
                    compilerOptions: {
                        module: 'esnext'
                    }
                }
            }
        ]
    }
};