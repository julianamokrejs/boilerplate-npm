const path = require('path'); //requer pacote path. npm install path --save-dev

module.exports = {
    mode: 'development',
    entry: './src/index.js', //porta de entrada do js pra que importe tudo em um unico arquivo = index.js
    output: {
        path: path.resolve(__dirname, 'dist'), // ./dist
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader"
            }, {
                loader: "sass-loader",
            }]
        }]
    }
};
