const MODE = "develop";

const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
	// エントリーポイント(メインのjsファイル)
	entry: './js/entry.js',
		//'style': path.resolve(__dirname, "./buildcss/top.scss"),
	// ファイルの出力設定
	output: {
	  	// 出力先(絶対パスでの指定必須) 
		//path: path.resolve(__dirname, 'stylesheet'),
		//filename: 'top.css',
		path: path.resolve(__dirname, 'app'),
		filename: 'app.js',
		libraryTarget: 'umd'
	},
	mode: MODE,
	node: {
		fs: "empty"
	},
	// ローダーの設定
	module: {
		rules: [
			/*{{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					{ loader: 'babel-loader',options: { presets: ["@babel/preset-env"]}},
					{ loader: 'vue-loader'}
				]
			},
			{
				test: /\.vue$/, // ファイルが.vueで終われば...
				exclude: /node_modules/,
				loader: 'vue-loader' // vue-loaderを使う
			},
				test: /\.scss$/,
				use: [
					{ loader: MiniCssExtractPlugin.loader },
					{ loader: 'css-loader', options:{ url: false}},
					{ loader: 'sass-loader' }
				]
			},
			*/
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].css'
		}),
		/*new VueLoaderPlugin(),*/
	],
}