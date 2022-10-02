const mod=process.env.NODE_ENV !== 'production'
const webpack=require('webpack')
const nodeExternals=require('webpack-node-externals')

const path=require('path')

const MinifyPlugin=require('babel-minify-webpack-plugin')


module.exports={
    mode:    mod ? 'development' : 'production',
    devtool: 'source-map',
    entry:   './index.js',
    target:  'node', 
    externals: [nodeExternals()],
    output:{
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.js' 
            
            /*  usar esta configuração randômica em 
                ambiente de produção
                pois é necessário alterar 
                o arquivo no package.json
            */

            // --> { filename: 'bundle.[contenthash].js' }
    },
    plugins:[
        new MinifyPlugin({},{   
            comments: false
        })
    ]
}
