'use strict';

const gulp = require('gulp');
const webpack = require('webpack-stream');
const path = require('path');
const fs = require('fs-extra');
const webpackConfig = require('./webpack.config');
const istanbul = require('gulp-istanbul');
const mocha = require('gulp-mocha');

gulp.task('default', ['webpack']);
gulp.task('webpack', ['build'], () => {
    let config = Object.create(webpackConfig);
    config.cache = true;
    config.devtool = 'source-map';
    return gulp.src([])
        .pipe(webpack(config))
        .pipe(gulp.dest('./dist'));
});

function isDir(dir) {
    try {
        const stat = fs.statSync(dir);
        return stat.isDirectory();
    } catch (e) {
        return false;
    }
}

function scanDir(dir) {
    const files = fs.readdirSync(dir);
    let result = [];
    for (const file of files) {
        if (isDir(dir + path.sep + file)) {
            result = result.concat(scanDir(dir + path.sep + file));
        } else {
            result.push(dir + path.sep + file);
        }
    }
    return result;
}

gulp.task('build', () => {
    fs.removeSync('./src/index.js');
    const files = scanDir('./src');
    let output = `module.exports = {\n`;
    for (const file of files) {
        const module = path.basename(file, path.extname(file));
        const p = path.relative('./src', file);
        output += `    '${module}': require('./${p}'),\n`;
    }
    output += '}\n';
    fs.writeFileSync('./src/index.js', output);
});

gulp.task('test:istanbul', ['build'], () => {
    return gulp.src(['test/**/*.js'])
        .pipe(istanbul())
        .pipe(istanbul.hookRequire())
        .pipe(gulp.dest('coverage'));
});

gulp.task('test', ['test:istanbul'], () => {
    return gulp.src(['test/**/*.js'], {read: false})
        .pipe(mocha({

        }))
        .pipe(istanbul.writeReports())
        .once('end', () => {
            process.exit();
        });
});
