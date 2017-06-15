var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin'); //html压缩
var jsmin = require('gulp-uglify'); //js压缩
var concat = require('gulp-concat'); //文件合并
var cssmin = require('gulp-clean-css'); //css压缩
var less = require('gulp-less'); //less
var sass = require('gulp-sass'); //scss


gulp.task('default', [] , function() {
    return gulp.src('sass/jikexueyuan.scss')
        .pipe(sass())
        .pipe(cssmin())
        .pipe(concat('jikexueyuan.min.css'))
        .pipe(gulp.dest('build'));
});


//html压缩
// gulp.task('htmlmin', function() {
//     var options = {
//         removeComments: true, //清除html注释
//         collapseWhitespace: true, //压缩html
//         removeEmptyAttributes: false //删除所有空格作属性值 <input id="" /> ==> <input />
//     };
//     return gulp.src('jikexueyuan.html')
//         .pipe(concat('jikexueyuan.min.html'))
//         .pipe(htmlmin(options))
//         .pipe(gulp.dest('build'));
// });

//css压缩
// gulp.task('cssmin', function() {
//     return gulp.src('jikexueyuan.css')
//         .pipe(concat('jikexueyuan.min.css'))
//         .pipe(cssmin())
//         .pipe(gulp.dest('build'));
// });

// gulp.task('less', function() {
//     return gulp.src('./src/css1.less')
//         .pipe(less())
//         .pipe(gulp.dest('./dest'));
// });

// gulp.task('sass', function() {
//     return gulp.src('test.scss')
//         .pipe(sass())
//         .pipe(gulp.dest('./dest'));
// });
