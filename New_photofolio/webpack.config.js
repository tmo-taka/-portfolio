const MODE = "development";

const path = require('path');

module.exports = {
	// エントリーポイント(メインのjsファイル)
	entry: './js/server.js',
	// ファイルの出力設定
	output: {
	  // 出力先(絶対パスでの指定必須)
	  path: path.resolve(__dirname, 'dist/js'),
	  // 出力ファイル名
	  filename: "bundle.js"
	},
	mode: MODE,
	// ソースマップ有効
	devtool: 'source-map',
	// ローダーの設定
	module: {
	  rules: [
		{
		  test: /\.scss$/,
		  use: ["css-loader"]
		},
		{
		  test: /\.vue$/,
		  loader: "vue-loader"
		},
		{
		  // ローダーの対象 // 拡張子 .js の場合
		  test: /\.js$/,
		  // ローダーの処理対象から外すディレクトリ
		  exclude: /node_modules/,
		  // Babel を利用する
		  loader: "babel-loader",
		  // Babel のオプションを指定する
		  options: {
			presets: [
			  // プリセットを指定することで、ES2019 を ES5 に変換
			  "@babel/preset-env"
			]
		  }
		}
	  ]
	}
}