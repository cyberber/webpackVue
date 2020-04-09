const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin'); //引入这行
const webpack = require('webpack');

module.exports = env => {
    if(!env) {
        env = {}
    }
    let plugins = [
        new HtmlWebpackPlugin({
            template: './app/views/index.html'
        }),
        new webpack.HotModuleReplacementPlugin({
            // Options...
        }),
        new CleanWebpackPlugin(),
        new VueLoaderPlugin() //new一个实例
    ]
    if(env.production) {
        plugins.push
    }
    return {
            entry: {
                app: './app/js/main.js'
            },
            module: {
                rules:[{
                    test: /\.html$/,
                    loader: 'html-loader'
                },{
                    test: /\.vue$/,
                    loader: 'vue-loader'
                },
                {
                    test: /.scss$/,
                    use:['style-loader','css-loader','sass-loader'] 
                }
                ]
        
            },
            resolve: {
                alias: {
                  'vue$': 'vue/dist/vue.esm.js' // 用 webpack 1 时需用 'vue/dist/vue.common.js'
                }
            },
            devServer: {
                contentBase: path.join(__dirname, 'dist'),
                compress: true,
                port: 9000,
                hot:true
            },
            plugins,
            output:{
                filename: '[name].min.js',
                path: path.resolve(__dirname,'dist')
            }
        }
}