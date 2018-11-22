const path = require('path')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    entry: {
        app: './src/index.ts'
    },
    output: {
        path: path.resolve(__dirname, './dist/'),
        filename: 'bundle.js',
        libraryTarget: 'umd',
        library: 'VueComponentLibrary',
        // publicPath: "~/node_modules/@uq-elipse/vue-component-library/src/" // this changes the image src path once it's bundled
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
                        // the "scss" and "sass" values for the lang attribute to the right configs here.
                        // other preprocessors should work out of the box, no loader config like this necessary.
                        'scss': 'vue-style-loader!css-loader!sass-loader',
                        'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax',
                    },
                    transformAssetUrls: {
                        source: "src",
                        img: "src",
                        image: "xlink:href",
                    }
                }
            },
            {
                test: /\.(ts|tsx)?$/,
                loader: "ts-loader",
                exclude: /node_modules/,
                options: {
                    appendTsSuffixTo: [/\.vue$/],
                },
            },
            {
                test: /\.(png|jpe?g|gif)(\?.*)?$/,
                loader: "file-loader",
                options: {
                    name: "[name].[ext]?[hash]",    // this configures what the image src path should be once it is bundled, this is appended to the publicPath above
                },
            },
            {
                test: /\.svg$/,
                loader: "html-loader",
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    mode: 'production',
    plugins: [
        new VueLoaderPlugin()
    ],
    resolve: {
        extensions: ['.ts', '.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            // '~': path.join(__dirname, "src")    // this helps webpack understand the paths in code before bundling
        }
    }
}

