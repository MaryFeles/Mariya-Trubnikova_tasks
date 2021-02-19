const fileinclude = require('gulp-file-include');

const project_folder = "dist";
const sourse_folder = "src";

const { src, dest } = require('gulp');
const gulp = require('gulp');
const browsersync = require("browser-sync").create();
const file_include = require("gulp-file-include");
const del = require("del");
const scss = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const group_media = require("gulp-group-css-media-queries");
const clean_css = require("gulp-clean-css");
const rename = require("gulp-rename");
const uglify = require("gulp-uglify-es").default;
const webp = require("gulp-webp");
const webphtml = require("gulp-webp-html");
const webpcss = require("gulp-webp-css");

const path = {
    build: {
        html: project_folder + "/",
        css: project_folder + "/css/",
        js: project_folder + "/js",
        img: project_folder + "/img/",
        fonts: project_folder + "/fonts/",
    },
    src: {
        html: [sourse_folder + "/*.html", "!" + sourse_folder + "/_*.html"],
        css: sourse_folder + "/scss/style.scss",
        js: sourse_folder + "/js/script.js",
        img: sourse_folder + "/img/**/*.{jpg,png,svg,gif,ico,webp}",
        fonts: sourse_folder + "/fonts/*.ttf",
    },
    watch: {
        html: sourse_folder + "/**/*.html",
        css: sourse_folder + "/scss/**/*.scss",
        js: sourse_folder + "/js/**/*.js",
        img: sourse_folder + "/img/**/*.{jpg,png,svg,gif,ico,webp}",
    },
    clean: "./" + project_folder + "/"
}

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
        .pipe(webphtml())
        .pipe(dest(path.build.html))
        .pipe(browsersync.stream())
}

function js() {
    return src(path.src.js)
        .pipe(file_include())                              
        .pipe(dest(path.build.js))
        .pipe(uglify())
        .pipe(rename({
                extname: ".min.js"
            })
        )
        .pipe(dest(path.build.js))                       
        .pipe(browsersync.stream())
}                        

function css() {
    return src(path.src.css)
        .pipe(scss({
                outputStyle: "expanded"                    // указание, чтобы css-файл формировался не сжатым
            })
        )
        .pipe(group_media())
        .pipe(autoprefixer({
                overrideBrowserslist: ["last 5 versions"], // браузеры, которые нужно поддерживать
                cascade: true                              // стиль оформления автопрефикса
            })
        )
        .pipe(dest(path.build.css))
        .pipe(clean_css())
        .pipe(rename({
                extname: ".min.css"
            })
        )
        .pipe(webpcss())
        .pipe(dest(path.build.css))
        .pipe(browsersync.stream())
}

function images() {
    return src(path.src.img)
        .pipe(webp({
                quality: 70
            })
        )
        .pipe(dest(path.build.img))
        .pipe(src(path.src.img))
        .pipe(dest(path.build.img))
        .pipe(browsersync.stream())
}

function watchFiles(params) {
    gulp.watch([path.watch.html], html);
    gulp.watch([path.watch.css], css);
    gulp.watch([path.watch.js], js);
    gulp.watch([path.watch.img], images);
}

function clean(params) {
    return del(path.clean);
}

let build = gulp.series(clean, gulp.parallel(images, js, css, html)); 
let watch = gulp.parallel(build, watchFiles, browserSync); 

exports.images = images;
exports.js = js;
exports.css = css;
exports.html = html;
exports.build = build;
exports.watch = watch;
exports.default = watch;
