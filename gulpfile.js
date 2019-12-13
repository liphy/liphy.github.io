var gulp = require('gulp');
var minifycss = require('gulp-minify-css');
//minifycss = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');
var htmlclean = require('gulp-htmlclean');
var imagemin = require('gulp-imagemin');
// 压缩public 目录内css文件
gulp.task('minify-css', function() {
  return gulp.src('./public/**/*.css')
  .pipe(minifycss())
  .pipe(gulp.dest('./public'));
});
// 压缩public目录内html文件
gulp.task('minify-html', function() {
  return gulp.src('./public/**/*.html')
  .pipe(htmlclean())
  .pipe(htmlmin({
    removeComments: true,//清除 HTML 注释
    collapseWhitespace: true,//压缩 HTML
	collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input /
	removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
	removeScriptTypeAttributes: true,//删除 <script> 的 type="text/javascript"
	removeStyleLinkTypeAttributes: true,//删除 <style> 和 <link> 的 type="text/css"
	minifyJS: true,//压缩页面 JS
    minifyCSS: true,//压缩页面 CSS
    minifyURLs: true,
  }))
  .pipe(gulp.dest('./public'))
});
// 压缩public目录内js文件
gulp.task('minify-js', function() {
  return gulp.src('./public/js/**/*.js')
  .pipe(uglify())
  .pipe(gulp.dest('./public'));
});
// 压缩 public 目录内图片
gulp.task('minify-images', function() {
    return gulp.src('./public/images/**/*.*')
        .pipe(imagemin(
        [imagemin.gifsicle({'optimizationLevel': 3}), 
        imagemin.jpegtran({'progressive': true}), 
        imagemin.optipng({'optimizationLevel': 7}), 
        imagemin.svgo()],
        {'verbose': true}))
        .pipe(gulp.dest('./public/images'))
});
// 默认任务
gulp.task('default',gulp.series(gulp.parallel('minify-html','minify-css','minify-js','minify-images')));
