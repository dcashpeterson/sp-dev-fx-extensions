//Library Paths -- DO NOT INCLUDE ENDING FILE TYPE (.js)
const reactPath = "https://unpkg.com/react@16.8.5/umd/react.development";
const reactDomPath = "https://unpkg.com/react-dom@16.8.5/umd/react-dom.development";
const globalNavUILibPath = "https://derekcp.sharepoint.com/sites/PnPGlobalNavModern/Style%20Library/reactglobalnavcommon";

//entry can be an array and an include multiple files
const webpack = require('webpack');
const path = require('path');
const bundleAnalyzer = require('webpack-bundle-analyzer');

const dropPath = path.join(__dirname, 'temp', 'stats');
const lastDirName = path.basename(__dirname);

let bannerText = "";
const fs = require('fs');
const package = './package.json';
let ver = "1.0.0";
if (fs.existsSync(package)) {
  const packageFileContent = fs.readFileSync(package, 'UTF-8');
  const pagesContents = JSON.parse(packageFileContent);
  ver = pagesContents.version;
  bannerText = `*****${pagesContents.name} - Version: ${pagesContents.version} - ${pagesContents.description}*****`;
}

module.exports = {
  mode: 'development',
  target: 'web',
  entry: {
    globalnavclassic: path.resolve(__dirname, './lib/index.js')
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: bannerText
    }),
    new webpack.DefinePlugin({
      __REACT__: JSON.stringify(reactPath),
      __REACTDOM__: JSON.stringify(reactDomPath),
      __GLOBALNAVUILIB__: JSON.stringify(globalNavUILibPath)
    }),
    new bundleAnalyzer.BundleAnalyzerPlugin({
      openAnalyzer: false,
      analyzerMode: 'static',
      reportFilename: path.join(dropPath, `${lastDirName}.stats.html`),
      generateStatsFile: true,
      statsFilename: path.join(dropPath, `${lastDirName}.stats.json`),
      logLevel: 'error'
    })
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].js"
  },
  module: {
    rules: [{
      test: /\.css$/,
      exclude: /node_modules/,
      loader: ["@microsoft/loader-load-themed-styles", "css-loader"]
    }]
  },
  externals: [
    '@sp-dev-fx-extensions/globalnavcommon',
    'react',
    'react-dom',
    'requirejs'
  ]
};