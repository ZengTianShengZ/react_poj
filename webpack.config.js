/**
 * Created by bong on 2016/10/23.
 */
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
module.exports = {
    devtool: 'eval-source-map',//配置生成Source Maps，选择合适的选项
    entry:  __dirname + "/app/components/js/index.js",//已多次提及的唯一入口文件
    output: {
        path: __dirname + "/app/pages/index",//打包后的文件存放的地方
        filename: "bundle.js"//
        //publicPath:"http://127.0.0.1:8080/public/"
    },
    /*devServer: {
        contentBase: "./app/pages/index",//本地服务器所加载的页面所在的目录
        colors: true,//终端中输出结果为彩色
        historyApiFallback: true,//不跳转
        inline: true//实时刷新
    },*/
    //通过使用不同的loader，webpack通过调用外部的脚本或工具可以对各种各样的格式的文件进行处理
    module: {//在配置文件里添加JSON loader
        loaders: [
            {
                test: /\.json$/,
                loader: "json"
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader?presets[]=es2015'
            },
            /*{
             test: /\.js$/,
             exclude: /node_modules/,
             loader: 'babel'//在webpack的module部分的loaders里进行配置即可
             },*/
            {
                test: /\.css$/,
                //loader: 'style!css'//添加对样式表的处理 //感叹号的作用在于使同一文件能够使用不同类型的loader
                loader: 'style!css?modules'//跟前面相比就在后面加上了?modules
            },
            {
                test: /\.scss$/,  // 匹配所有的 sass 文件
                loader: 'style!css!sass'  //  先用 sass 处理 ，在用 css 处理 ，最后 style
            }
        ]
    },
    /* 插件 */
    plugins: [
        /*new HtmlWebpackPlugin({
            template: __dirname + "/app/index.tmpl.html"//new 一个这个插件的实例，并传入相关的参数
        }),*/
        /*new webpack.DefinePlugin({
            'process.env.NODE.ENV':"development"
        }),*/
        //new webpack.HotModuleReplacementPlugin(),
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3000,
            files: '',
            server: {
                //指定服务器启动根目录
                baseDir: './'
            }
        })
    ]
};