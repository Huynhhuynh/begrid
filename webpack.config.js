const path = require( 'path' );

module.exports = {
    mode: 'production',
    entry: {
        begrid: './src/begrid.js',
    },
    output: {
        path: path.resolve( __dirname, 'dist' ), 
        filename: '[name].min.js',
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    }
}