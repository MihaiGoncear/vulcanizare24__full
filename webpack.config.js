const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry:  {
        index: './src/js/firstPage/index.js',
        contacts: './src/js/contactPage/contacts.js',
        catalog: './src/js/catalogPage/catalog.js',
        shared: './src/js/sharedJS/styles.js',
        sharedProducts: './src/js/sharedJS/products.js',
        servicii: './src/js/catalogPage/servicii.js',
        anvelope: './src/js/catalogPage/anvelope.js',
        anvelopePage: './src/js/catalogPage/anvelopePage.js',
        oilPage: './src/js/catalogPage/oilPageMain.js'
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: 'css-hot-loader',
                    },
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    'css-loader',
                    'sass-loader',
                ],
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'style.css'
        }), 
        new CopyPlugin ({
            patterns: [
                {from: './src/images', to: 'images'}
            ]
        }),
        new HtmlWebpackPlugin({
            filename: 'contacts.html',
            template: '!!ejs-webpack-loader!./contacts.ejs',
            chunks: ['shared', 'contacts']
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: '!!ejs-webpack-loader!./index.ejs',
            chunks: ['shared', 'index']
        }),
        new HtmlWebpackPlugin({
            filename: 'catalog.html',
            template: '!!ejs-webpack-loader!./catalog.ejs',
            chunks: ['shared', 'catalog', 'oilPage']
        }),
        new HtmlWebpackPlugin({
            filename: 'servicii.html',
            template: '!!ejs-webpack-loader!./servicii.ejs',
            chunks: ['shared', 'servicii']
        }),
        new HtmlWebpackPlugin({
            filename: 'anvelope.html',
            template: '!!ejs-webpack-loader!./anvelope.ejs',
            chunks: ['shared', 'anvelope']
        }),
        new HtmlWebpackPlugin({
            filename: 'anvelopePage.html',
            template: '!!ejs-webpack-loader!./anvelopePage.ejs',
            chunks: ['shared', 'anvelopePage']
        })
    ],
    devServer: {
        contentBase: path.resolve(__dirname, 'build'),
        compress: true,
        writeToDisk: true,
        watchContentBase: true,
        port: 8000,
    }
};