'use strict';

var gulp = require('gulp'),
    watch = require('gulp-watch'),
    autoprefix = require('gulp-autoprefixer'),
    less = require('gulp-less'),
    minifyCSS = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    gulpIgnore = require('gulp-ignore'),
    rigger = require('gulp-rigger'),
    imageop = require('gulp-image-optimization'),
    rimraf = require('rimraf'),
    browserSync = require("browser-sync"),
    reload = browserSync.reload,
    cleanCSS = require('gulp-clean-css');

/* =====================================================
 copiar
 ===================================================== */
gulp.task('copy:js', function () {
    gulp.src([
            'src/js/**/*.*',
        ])
        .pipe(gulp.dest('build/js'));
});

gulp.task('copy:img', function () {
    gulp.src([
            'src/img/**/*.*',
        ])
        .pipe(gulp.dest('build/img'));
});

gulp.task('copy:fonts', function () {
    gulp.src([
            'src/fonts/**/*.*',
        ])
        .pipe(gulp.dest('build/fonts'));
});


// Copia os css já compilados do template

gulp.task('copy:main-css', function () {
    gulp.src([
            'src/css/main.css',
        ])
        .pipe(gulp.dest('build/css/'));
});

gulp.task('copy:lib-css', function () {
    gulp.src([
            'src/css/lib/**/*.*',
        ])
        .pipe(gulp.dest('build/css/lib/'));
});

gulp.task('copy:separate-css', function () {
    gulp.src([
            'src/css/separate/**/*.*',
        ])
        .pipe(gulp.dest('build/css/separate/'));
});

/* =====================================================
 css
 ===================================================== */

var path = {
    build: { // production
        html: 'build/',
        css: 'build/css/'
    },
    src: { // development
        html: 'src/**/*.html',
        style: 'src/css/less/flow/flow-custom.less'
    },
    watch: {
        html: 'src/**/**/*.html',
        js: 'src/js/**/*.js',
        style: 'src/css/**/*.*',
        img: 'src/img/**/*.*',
        fonts: 'src/fonts/**/*.*'
    },
    clean: './build'
};

/* =====================================================
 SERVER
 ===================================================== */

var config = {
    server: {
        baseDir: "./build/pages/"
    },
    tunnel: false,
    host: 'localhost',
    port: 9000,
    logPrefix: "Frontend",
    watchTask: true
};

gulp.task('webserver', function () {
    browserSync(config);
});


/* =====================================================
 HTML
 ===================================================== */

gulp.task('html:build', function () {
    return gulp.src(path.src.html)
        .pipe(rigger())
        .pipe(gulp.dest(path.build.html))
        .pipe(reload({stream: true}));
});

/* =====================================================
 STYLES
 ===================================================== */

gulp.task('style:build:custom', function () {
    return gulp.src(path.src.style)
        .pipe(less())
        .pipe(autoprefix({
            browsers: ['last 30 versions', '> 1%', 'ie 8', 'ie 9'],
            cascade: true
        }))
        .pipe(rename('custom.css'))
        .pipe(gulp.dest(path.build.css))
        .pipe(reload({stream: true}));
});


/* =====================================================
 BUILD TASK
 ===================================================== */

gulp.task('build', [
    'html:build',
    'style:build:custom',
    'copy:js',
    'copy:img',
    'copy:fonts',
    'copy:main-css',
    'copy:lib-css',
    'copy:separate-css'
]);


/* =====================================================
 WATCH
 ===================================================== */

gulp.task('watch', function () {
    watch([path.watch.html], function (event, cb) {
        gulp.start('html:build');
    });
    watch([path.watch.style], function (event, cb) {
        gulp.start('style:build:custom');
    });
    gulp.watch('files', [
        'copy:js',
        'copy:img',
        'copy:fonts',
        'copy:main-css',
        'copy:lib-css',
        'copy:separate-css'
    ]);
});


/* =====================================================
 CLEAN PRODUCTION
 ===================================================== */

gulp.task('clean', function (cb) {
    rimraf(path.clean, cb);
});


/* =====================================================
 DEFAULT TASK
 ===================================================== */

gulp.task('default', ['build', 'webserver', 'watch']);