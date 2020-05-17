var gulp = require('gulp'),
    plumber      = require('gulp-plumber'),
    concat       = require('gulp-concat'),
    uglify       = require('gulp-uglify'),
    scss         = require('gulp-sass'),
    sourcemaps   = require('gulp-sourcemaps'),
    sourceMapSupport = require('gulp-sourcemaps-support'),
    autoprefixer = require('gulp-autoprefixer'),
    combineMq    = require('gulp-combine-mq'),
    rename       = require("gulp-rename"),
    notify       = require('gulp-notify');


    scss.compiler = require('node-sass');



// scss to css compilation

gulp.task('smallickwsitecss', function () {
    // style one by one
    return gulp.src('../assets/scss/**/*.scss')
    // output style & error log
    .pipe(scss({outputStyle: 'compressed'}).on('error', scss.logError))
    // auto prefixer
    .pipe(autoprefixer('last 2 versions', {map: false }))
    // sourcemaps
    .pipe(sourcemaps.write())
    // set destinations
    .pipe(gulp.dest('../assets/css/@smallickwsitecss-production'))
    // add .min suffix
    .pipe(rename({suffix: '.min'}))
    // set destinations
    .pipe(gulp.dest('../assets/css/@smallickwsitecss-production'))
    // send complition notification
    .pipe(notify({ message: 'Styles task complete' }));
});



// js compilation

gulp.task('smallickwsitejs', function() {
    //script one by one
    return gulp.src([
        //'../assets/js/jquery.min.js'
    ])
    .pipe(plumber())
    //made uglify
    .pipe(uglify())
    //made concat one by one
    .pipe(concat('smwebsitE-min.js'))
    //send the minify file in the production folder
    .pipe(gulp.dest('../assets/js/@smallickwsitejs-production'))
    // send complition notification
    .pipe(notify({ message: 'Scripts task complete' }));
});


// watch task started
gulp.task('watch', function(){
    gulp.watch('../assets/js/*.js', ['smallickwsitejs']);
    gulp.watch('../assets/scss/**/*.scss', ['smallickwsitecss']);
});

// gulp default taskstart
gulp.task('default', [ 'smallickwsitejs', 'smallickwsitecss', 'watch' ]);
