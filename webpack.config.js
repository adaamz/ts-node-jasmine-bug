const path = require('path');

module.exports = {
    entry: './app/index.ts',
    output: {
        filename: 'compiled_ts.js',
        library: 'Vehicle',
        path: path.resolve(__dirname, "compiled")
    },
    resolve: {
        extensions: ['.ts']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            }
        ]
    }
};
