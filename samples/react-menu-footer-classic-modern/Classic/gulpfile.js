const {
  src,
  dest,
  watch,
  series
} = require('gulp'),
  ts = require('gulp-typescript'),
  plumber = require('gulp-plumber'),
  sass = require('gulp-sass'),
  sourcemaps = require('gulp-sourcemaps'),
  autoprefixer = require('gulp-autoprefixer'),
  webpackStream = require('webpack-stream'),
  args = require('yargs'),
  rimraf = require('rimraf');

args.argv['ship'] !== undefined ? isProduction = true : isProduction = false;

console.log('isProduction', isProduction);


const tsSrc = './src/**/*.ts*',
  sassFiles = './src/**/*.scss',
  outDir = './lib/';

const tsProject = ts.createProject('tsconfig.json');

// Compile TypeScript
const tsCompile = () => {

  return src(tsSrc)
    .pipe(plumber())
    .pipe(tsProject())
    .pipe(
      dest(outDir)
    );

};

// Compile SASS files to lib
const sassCompile = () => {

  return src(sassFiles)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass.sync({
      outputStyle: 'expanded',
      precision: 10,
      includePaths: ['.']
    }).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write())
    .pipe(dest(outDir));

};

const cssCopy = () => {

  return src('./src/**/*.css')
    .pipe(dest('lib'));

}

// Webpack
const webpack = () => {

  const webpackConfig = require('./webpack.config.js');

  if (isProduction) {
    webpackConfig.mode = 'production';
  }

  return src('lib/**/*.js')
    .pipe(plumber())
    .pipe(
      webpackStream(webpackConfig))
    .pipe(dest('dist'));

}

// remove dist on startup
rimraf.sync('./dist');

//if (!isProduction) {
//  watch('./src/**/*.s[a|c]ss', series(sassCompile, webpack));
//  watch('./src/**/*.{ts,tsx}', series(tsCompile, webpack));
//}


exports.build = series(tsCompile, cssCopy, webpack)