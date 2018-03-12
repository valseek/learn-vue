let path = require('path')
let webpack = require('webpack')

module.exports = {
    mode: "development",
    entry: __dirname + "/src/main.js",
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist",
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.js$/,
                use: "babel-loader"
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader",
                    },
                    {
                        loader: "css-loader",
                    },
                    {
                        loader: "postcss-loader",
                        options: {}
                    }
                ]
            }
        ]
    },
    devServer: {
        contentBase: [path.join(__dirname, "dist"),path.join(__dirname , 'static')],
        compress: true,
        port: 9123,
        open:"Google Chrome",
        openPage:'/index_test.html'
    },
    resolve: {
        extensions: ['.js', '.css', '.vue'],
        alias: {
            vue: 'vue/dist/vue.js'
        }
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            options: {
                vue: {
                    postcss: [
                        require('autoprefixer')(),
                    ]
                },
                postcss: [
                    require('autoprefixer')(),
                ],
            }
        })
    ]

}



