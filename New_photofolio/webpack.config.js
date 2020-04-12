const MODE = "development";

const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	// エントリーポイント(メインのjsファイル)
	entry: {
		'js': path.resolve(__dirname, "./js/serve.js"),
		//'style': path.resolve(__dirname, "./buildcss/top.scss"),
	},
	// ファイルの出力設定
	output: {
	  	// 出力先(絶対パスでの指定必須) 
		//path: path.resolve(__dirname, 'stylesheet'),
		//filename: 'top.css',
		path: path.resolve(__dirname, 'app'),
		filename: 'app.js',
	},
	mode: MODE,
	node: {
		fs: 'empty'
	},
	// ローダーの設定
	module: {
		rules: [
			{
				/*test: /\.scss$/,
				use: [
					{ loader: MiniCssExtractPlugin.loader },
					{ loader: 'css-loader' },
					{ loader: 'sass-loader' }
				]*/
			}
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].css'
		}),
	],
}