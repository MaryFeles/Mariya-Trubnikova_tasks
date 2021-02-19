const fileinclude = require('gulp-file-include');

let project_folder = "dist";
let sourse_folder = "src";

let path = {
    // пути, куда gulp будет выгружать уже обработанные файлы
    build: {
        html: project_folder + "/",
        css: project_folder + "/css/",
        js: project_folder + "/js",
        img: project_folder + "/img/",
        fonts: project_folder + "/fonts/",
    },
    // пути исходников
    src: {
        html: [sourse_folder + "/*.html", "!" + sourse_folder + "/_*.html"],   // исключает файлы, начинающиеся с символа "_"
        css: sourse_folder + "/scss/style.scss",
        js: sourse_folder + "/js/script.js",
        img: sourse_folder + "/img/**/*.{jpg,png,svg,gif,ico,webp}",
        fonts: sourse_folder + "/fonts/*.ttf",
    },
    // пути к файлам, которые нужно "слушать" постоянно
    watch: {
        html: sourse_folder + "/**/*.html",
        css: sourse_folder + "/scss/**/*.scss",
        js: sourse_folder + "/js/**/*.js",
        img: sourse_folder + "/img/**/*.{jpg,png,svg,gif,ico,webp}",
    },
    // объект, который отвечает за удаление папки проекта
    clean: "./" + project_folder + "/"
}

let { src, dest } = require('gulp'),
    gulp = require('gulp'),
    browsersync = require("browser-sync").create(),
    file_include = require("gulp-file-include"),
    del = require("del"),
    scss = require("gulp-sass"),
    autoprefixer = require("gulp-autoprefixer"),
    group_media = require("gulp-group-css-media-queries"),
    clean_css = require("gulp-clean-css"),
    rename = require("gulp-rename"),
    uglify = require("gulp-uglify-es").default,
    imagemin = require("gulp-imagemin"),
    webp = require("gulp-webp"),
    webphtml = require("gulp-webp-html"),
    webpcss = require("gulp-webp-css");


// Обновление браузера    
function browserSync(param) {
    browsersync.init({
        server: {
            baseDir: "./" + project_folder + "/"
        },
        port: 3000,
        notify: false
    })
}

function html() {
    return src(path.src.html)
        .pipe(file_include())
        .pipe(webphtml())                              // сборщик html-файлов
        .pipe(dest(path.build.html))                       // вывод результирующего файла в папку назначения
        .pipe(browsersync.stream())                        // обновление страницы
}

function js() {
    return src(path.src.js)
        .pipe(file_include())                              
        .pipe(dest(path.build.js))
        .pipe(
            uglify()
        )
        .pipe(
            rename({
                extname: ".min.js"
            })
        )
        .pipe(dest(path.build.js))                       
        .pipe(browsersync.stream())
}                        

function css() {
    return src(path.src.css)
        .pipe(
            scss({
                outputStyle: "expanded"                    // указание, чтобы css-файл формировался не сжатым
            })
        )
        .pipe(
            group_media()
        )
        .pipe (
            autoprefixer({
                overrideBrowserslist: ["last 5 versions"], // браузеры, которые нужно поддерживать
                cascade: true                              // стиль оформления автопрефикса
            })
        )
        .pipe(dest(path.build.css))
        .pipe(clean_css())
        .pipe(
            rename({
                extname: ".min.css"
            })
        )
        .pipe(webpcss())
        .pipe(dest(path.build.css))
        .pipe(browsersync.stream())
}

function images() {
    return src(path.src.img)
        .pipe(
            webp({
                quality: 70
            })
        )
        .pipe(dest(path.build.img))
        .pipe(src(path.src.img))
        .pipe(
            imagemin({
                progressive: true,
                svgPlugins: [{ removeViewBox: false }],
                interlaced: true,
                optimizationLevel: 3 // 0 to 7
            })
        )
        .pipe(dest(path.build.img))
        .pipe(browsersync.stream())
}

// Отслеживание изменений файлах
function watchFiles(params) {
    gulp.watch([path.watch.html], html);
    gulp.watch([path.watch.css], css);
    gulp.watch([path.watch.js], js);
    gulp.watch([path.watch.img], images);
}

// Удаление папки dist
function clean(params) {
    return del(path.clean);
}

let build = gulp.series(clean, gulp.parallel(images, js, css, html)); // серия выполняемых функций
let watch = gulp.parallel(build, watchFiles, browserSync); 

exports.images = images;
exports.js = js;
exports.css = css;
exports.html = html;
exports.build = build;
exports.watch = watch;
exports.default = watch;
