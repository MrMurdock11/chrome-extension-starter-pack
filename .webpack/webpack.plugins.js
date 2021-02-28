const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = [
	new CleanWebpackPlugin(),
	new CopyPlugin({
		patterns: [{ from: "manifest.json" }, { from: "icons", to: "icons" }],
	}),
];
