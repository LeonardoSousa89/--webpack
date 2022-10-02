const webpack=require('webpack')
const nodeExternals=require('webpack-node-externals')

const path=require('path')

const MinifyPlugin=require('babel-minify-webpack-plugin')


module.exports={
    mode:    'development',
    devtool: 'source-map',
    entry:   './index.js',
    target: 'node', 
    externals: [nodeExternals()],
    output:{
            path: path.resolve(__dirname, 'dist'),
            filename: 'index.js' 
    },
    module:{
        rules:[{
            test: /.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }],
    },
    plugins:[
        new MinifyPlugin({},{
            comments: false
        })
    ]
}
