const {svgoInstance} = require("./svgoConfig");
const {readFile, writeFile} = require("fs");
const {resolve} = require("path")
const minify = require("css-minify")

const svgTemplatePath = resolve(__dirname, '../assets/content-template.svg');
const htmlTemplatePath = resolve(__dirname, '../assets/preview-template.html');
const svgContentPath = resolve(__dirname, '../assets/android-update-inkscape.svg');
const stylePath = resolve(__dirname, '../assets/style.css');

const svgTargetPath = resolve(__dirname, '../content.g.svg');
const previewTargetPath = resolve(__dirname, '../preview.g.html');

// based on https://github.com/svg/svgo/blob/master/examples/test.js
// so many callbacks, but I don't really want to download another dependency just for promises e.e

readFile(svgContentPath, 'utf8', (err, originalSvgContent) => {
    if (err) throw err;

    readFile(svgTemplatePath, 'utf8', (err, svgTemplateContent) => {
        if (err) throw err;

        readFile(htmlTemplatePath, 'utf8', (err, htmlTemplateContent) => {
            if (err) throw err;

        readFile(stylePath, 'utf8', (err, styleContent) => {
            if (err) throw err;

            const minifiedStyle = minify(styleContent);

            svgoInstance.optimize(originalSvgContent, {path: svgContentPath}).then(({data: optimizedSvg}) => {
                const processedTrickContent = svgTemplateContent
                    .replace("{content}", optimizedSvg)
                    .replace("{style}", minifiedStyle);

                writeFile(svgTargetPath, processedTrickContent, () => {
                    console.log("Done printing trick");
                })

                const processedPreviewContent = htmlTemplateContent
                    .replace("{content}", optimizedSvg)
                    .replace("{style}", minifiedStyle);

                writeFile(previewTargetPath, processedPreviewContent, () => {
                    console.log("Done!");
                })
            });
        });
        });
    });
});
