import * as path from 'path';
import * as webpack from 'webpack';
import 'webpack-dev-server';

import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

type modeWP = 'none' | 'development' | 'production';
let mode: modeWP = 'development';

declare const process: {
	env: {
		NODE_ENV: string;
	};
};
if (process.env.NODE_ENV === 'production') {
	mode = 'production';
}
console.log(path.resolve(__dirname, './src/index.ts'));

const config: webpack.Configuration = {
	mode: mode,
	entry: ['@babel/polyfill', path.resolve(__dirname, './src/index.tsx')],
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: '[name].[contenthash].js',
		clean: true,
		assetModuleFilename: 'assets/[hash][exc][query]',
	},
	devtool: 'inline-source-map',
	devServer: {
		static: {
			directory: path.join(__dirname, './public'),
		},
		port: 3000,
		open: true,
		hot: true,
	},

	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].[contenthash].css',
		}),
		new HtmlWebpackPlugin({
			title: 'React TS',
			template: path.resolve(__dirname, './public/index.html'),
		}),
	],
	module: {
		rules: [
			{
				test: /\.(sa|sc|c)ss$/,
				use: [
					mode === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								plugins: ['postcss-preset-env'],
							},
						},
					},
					'sass-loader',
				],
			},
			{
				test: /\.tsx$/,
				exclude: /node-modules/,
				use: 'ts-loader',
			},
			{
				test: /\.js$/,
				exclude: /node-modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
					},
				},
			},
			{
				test: /\.jsx$/,
				exclude: /node-modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-react', '@babel/preset-env'],
					},
				},
			},
			{
				test: /\.(ico|png|webp|jpg|gif|jpeg)$/,
				type: 'asset/resource',
			},
			{
				test: /\.svg$/,
				loader: 'asset/inline',
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				loader: 'asset/resource',
			},
		],
	},
};
export default config;
