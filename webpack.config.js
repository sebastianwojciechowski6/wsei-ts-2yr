const path = require('path');
const config = {
    devtool: 'source-map',
    entry: './src/script/Game.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    //creates 'style' nodes from JS strings
                    'style-loader',
                    //translates CSS into CommonJS
                    'css-loader',
                    // compiles SASS to CSS
                    'sass-loader',
                ],
            },
        ],
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    }
};
module.exports = config;
