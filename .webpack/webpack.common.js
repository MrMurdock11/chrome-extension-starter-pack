const path = require("path");

module.exports = {
	entry: {
		background: "./src/background",
	},
	output: {
		path: path.resolve(__dirname, "../public"),
		filename: "[name].bundle.js",
		publicPath: "./",
	},
	resolve: {
		extensions: [".ts", ".js"],
	},
	module: {
		rules: require("./webpack.rules"),
	},
	plugins: require("./webpack.plugins"),
};
