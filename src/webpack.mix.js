const mix = require("laravel-mix");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js("resources/js/app.js", "public/js")
    .react() // React用設定
    .postCss("resources/css/app.css", "public/css", [
        //
    ]);

// webpack.config.jsの場合
// const path = require("path");

// module.exports = {
//     entry: "./resources/js/app.js", // エントリーポイント
//     output: {
//         path: path.resolve(__dirname, "public/js"), // 出力ディレクトリ
//         filename: "app.js", // 出力ファイル名
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.(js|jsx)$/, // .js または .jsx ファイルを対象
//                 exclude: /node_modules/, // node_modules ディレクトリを除外
//                 use: {
//                     loader: "babel-loader",
//                     options: {
//                         presets: ["@babel/preset-env", "@babel/preset-react"],
//                     },
//                 },
//             },
//             {
//                 test: /\.css$/, // .css ファイルを対象
//                 use: ["style-loader", "css-loader"], // CSSを処理するローダー
//             },
//         ],
//     },
//     resolve: {
//         extensions: [".js", ".jsx"], // 解決するファイル拡張子
//     },
// };
