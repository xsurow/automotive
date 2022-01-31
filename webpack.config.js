const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

mode = "development";
if (process.env.NODE_ENV === "production") {
    mode = "production";
}

module.exports = {
    mode: mode,
    
    output: {
        assetModuleFilename: "images/[hash][ext][query]",
    },

    module: {
        rules: [
            {
                test:/.(jpe?g|png|svg|gif)/i,
                type: "asset/resource",
            },
            {
                test: /\.(s[ac]|c)ss$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: { publicPath: "" },
                    },
                     "css-loader",
                     "sass-loader"
                ],
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
        ]
    },

    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        }),
    ],

    devtool: "source-map",
    devServer: {
        static: "./src",
        hot: true,
    }
} 
