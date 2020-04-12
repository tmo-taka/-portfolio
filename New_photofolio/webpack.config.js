const MODE = "development";

const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	// エントリーポイント(メインのjsファイル)
	entry: {
		"css": "./buildcss/top.scss"
	},
	// ファイルの出力設定
	output: {
	  	// 出力先(絶対パスでの指定必須) 
		path: path.resolve(__dirname, 'stylesheet'),
		filename: 'top.css',
	},
	mode: MODE,
	// ローダーの設定
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
					},
				],
			}
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'css',
		}),
	],
}