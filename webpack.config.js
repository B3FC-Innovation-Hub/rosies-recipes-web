const path = require('path');

const webpackFileInjector={loader: path.resolve('../webpack-html-file-injector/loader.js')};

function emitFile(contents,filename){
  console.log(this)
  this.emitFile(filename,contents)
  return ''; //prevents anything from being included in app.js
}

module.exports = {
  entry: path.resolve(__dirname, 'webpack.entrypoint.js'),
  devtool: 'inline-source-map',
    module: {
      rules: [
        {
          test: /\.(t|j)sx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.less$/i,
          use: [
            function(contents){emitFile.call(this,contents,'main.css');},
            "less-loader",
            webpackFileInjector,
          ],
        },
        {
          test: /\.html/i,
          use: [
            function(contents){emitFile.call(this,contents,'index.html');},
            webpackFileInjector,
          ],
        },
      ],
    },
    resolve: {
      extensions: [ '.tsx', '.ts', '.js' ],
    },
    output: {
      filename: 'app.js', //only the script files will be combined in this bundle, html and css will exit early using emitSeperateFile
      path: path.resolve(__dirname, 'dist'),
    },
    mode: 'development'
};
