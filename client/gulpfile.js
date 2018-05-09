'use strict';
const gulp = require('gulp');
const path = require('path');
const sequence = require('run-sequence');
const del = require('del');
const webpackStream = require('webpack-stream');

const webpackConfigName = './webpack.config.js';
const webpackConfig = require(webpackConfigName);


const ROOT_DIR = __dirname;
const DATA_DIR = path.join(ROOT_DIR, 'data');
const LIBS_DIR = path.join(ROOT_DIR, 'lib');
const BUILD_DIR = webpackConfig.output.path;
const BUILD_DATA_FILES = [
    `${DATA_DIR}/**/*`,
];

const BUILD_LIBS_FILES = [
    `${LIBS_DIR}/**/*`
];

const BUILD_EXTRA_FILES = [
    `${ROOT_DIR}/index.html`,
    `${ROOT_DIR}/project.json`
];

const defaultTasks = [];

defaultTasks.push('clean:binFiles');
defaultTasks.push('copy:lib');
defaultTasks.push('copy:extra');
defaultTasks.push('copy:data');


gulp.task("clean:binFiles", () => del([`${BUILD_DIR}/*.*`], {force: true})); //TODO use /** instead of *.* but it has bug.

gulp.task('copy:data', () => gulp.src(BUILD_DATA_FILES).pipe(gulp.dest(`${BUILD_DIR}/data`)));

gulp.task('build:clean', done => rimraf(BUILD_DIR, () => mkdirp(BUILD_DIR, done)));

gulp.task('copy:extra', () => {gulp.src(BUILD_EXTRA_FILES).pipe(gulp.dest(BUILD_DIR))});

gulp.task('copy:lib', () => gulp.src(BUILD_LIBS_FILES).pipe(gulp.dest(`${BUILD_DIR}/lib`)));


gulp.task("server", () => {
    const liteServer = require('lite-server');

    process.chdir(path.resolve(BUILD_DIR));
    liteServer.server();
});
gulp.task('build:webpack', defaultTasks, () =>
    gulp.src(`${__dirname}/src/index.ts`).
    pipe(webpackStream(webpackConfig)).
    pipe(gulp.dest(BUILD_DIR)));

gulp.task('build:version', ()=>{}),

gulp.task('default', () => sequence('build:webpack', ['build:version']));

