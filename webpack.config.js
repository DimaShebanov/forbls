const path = require("path"),
    webpack = require("webpack"),
    CopyWebpackPlugin = require("copy-webpack-plugin"),
    UglifyJSPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
    mode: "development",
    entry: path.join(__dirname, "src", "index"),
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dest"),
    },
    optimization: {
        minimizer: [new UglifyJSPlugin()],
    },
    module: {
        rules: [
            {
                test: /.jsx?$/,
                include: [path.resolve(__dirname, "src")],
                exclude: [path.resolve(__dirname, "node_modules"), path.resolve(__dirname, "bower_components")],
                loader: "babel-loader",
            },
            {
                test: /(.less|.css)$/,
                use: [
                    {
                        loader: "style-loader", // creates style nodes from JS strings
                    },
                    {
                        loader: "css-loader", // translates CSS into CommonJS
                    },
                    {
                        loader: "less-loader", // compiles Less to CSS
                    },
                ],
            },
            {
                test: /(.svg|.png)$/,
                loader: "file-loader",
            },
        ],
    },
    resolve: {
        extensions: [".json", ".js", ".jsx", ".css", ".less"],
        alias: {
            l10n: path.resolve('./src/utils/l10n.js'),
        }
    },
    devtool: "source-map",
    devServer: {
        port: 9005,
        contentBase: path.join(__dirname, 'dest/'),
        watchContentBase: true,
        hot: true,
        historyApiFallback: true
    },
    plugins: [new CopyWebpackPlugin(["src/index.html"]), new webpack.HotModuleReplacementPlugin()],
};
