const path = require('path')
const webpack = require('webpack')
const ESLintPlugin = require('eslint-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

/** @type {import('eslint-webpack-plugin').Options & import('eslint').ESLint.Options} */
const eslintPluginOptions = {
	threads: true,
	// emitError: true
}

/** @type {Array<import('webpack').Configuration>} */
module.exports = [
	{
		name: "mobile",
		// mode: "development || "production",
		entry: "./src/index.js",
		output: {
			path: path.join(__dirname, "dist"),
			filename: "mobile.js"
		},
		plugins: [
			new webpack.DefinePlugin({
				ENV: JSON.stringify("mobile")
			}),
			// It doesn’t matter if you comment or not
			new ESLintPlugin(eslintPluginOptions)
		]
	},

	{
		name: "desktop",
		// mode: "development || "production",
		entry: "./src/index.js",
		output: {
			path: path.join(__dirname, "dist"),
			filename: "desktop.js"
		},
		plugins: [
			new webpack.DefinePlugin({
				ENV: JSON.stringify("desktop")
			}),
      new CleanWebpackPlugin(),
			new ESLintPlugin(eslintPluginOptions)
		]
	}
];