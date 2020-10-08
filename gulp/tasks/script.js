module.exports = function () {
  // Обработка файлов библиотек и конкатенация в один js файл
  $.gulp.task('scripts:lib', function () {
    return $.gulp
      .src(['node_modules/jquery/dist/jquery.min.js', 'node_modules/wow.js/dist/wow.min.js', 'node_modules/slick-carousel/slick/slick.min.js'])
      .pipe($.gp.concat('libs.min.js'))
      .pipe($.gulp.dest('build/js/'))
      .pipe(
        $.bs.reload({
          stream: true,
        }),
      );
  });
  // Обработка файлов библиотек и перенос в build в исходном виде
  // $.gulp.task('scripts:lib', function() {
  //     return $.gulp.src('src/static/libs/*/**')
  //     .pipe($.gulp.dest('build/libs/'))
  //     .pipe($.bs.reload({
  //         stream: true
  //     }));
  // });
  // Перенос файла common.js в папку build
  $.gulp.task('scripts', function () {
    return $.gulp
      .src('src/static/js/main.js')
      .pipe($.gulp.dest('build/js/'))
      .pipe(
        $.bs.reload({
          stream: true,
        }),
      );
  });
};
