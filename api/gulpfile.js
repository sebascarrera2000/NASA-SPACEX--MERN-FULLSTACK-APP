const gulp = require('gulp');
const ts = require('gulp-typescript');
const sourcemaps = require('gulp-sourcemaps');
const del = require('del');

const tsProject = ts.createProject('tsconfig.json');

// Tarea para compilar los archivos TypeScript
gulp.task('compile', () => {
  return gulp.src('src/**/*.ts')
    .pipe(sourcemaps.init())
    .pipe(tsProject())
    .pipe(sourcemaps.write('.', { sourceRoot: './src' }))
    .pipe(gulp.dest('dist'));
});

// Tarea para limpiar el directorio de salida antes de cada compilación
gulp.task('clean', () => {
  return del(['dist']);
});

// Tarea para copiar los archivos no TypeScript al directorio de salida
gulp.task('copy', () => {
  return gulp.src(['src/**/*.json'])
    .pipe(gulp.dest('dist'));
});

// Tarea para construir el proyecto (compilar y copiar archivos)
gulp.task('build', gulp.series('clean', 'compile', 'copy'));

// Tarea por defecto que corre la construcción
gulp.task('default', gulp.series('build'));
