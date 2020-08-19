
const SVGO = require("svgo");
const svgo = new SVGO({
    plugins: [{
        cleanupAttrs: true
    }, {
        removeDoctype: true,
    }, {
        // removeXMLProcInst: true,
        removeXMLProcInst: true,
    }, {
        removeComments: true,
    }, {
        removeMetadata: true,
    }, {
        removeTitle: true,
    }, {
        removeDesc: true,
    }, {
        // removeUselessDefs: true,
        removeUselessDefs: false,
    }, {
        removeEditorsNSData: true,
    }, {
        removeEmptyAttrs: true,
    }, {
        // removeHiddenElems: true,
        removeHiddenElems: false,
    }, {
        removeEmptyText: true,
    }, {
        removeEmptyContainers: true,
    }, {
        removeViewBox: false,
    }, {
        cleanupEnableBackground: true,
    }, {
        convertStyleToAttrs: false,
    }, {
        // convertColors: true,
        convertColors: false,
    }, {
        convertPathData: true,
    }, {
        convertTransform: true,
    }, {
        // removeUnknownsAndDefaults: true,
        removeUnknownsAndDefaults: false,
    }, {
        removeNonInheritableGroupAttrs: true,
    }, {
        removeUselessStrokeAndFill: true,
    }, {
        removeUnusedNS: true,
    }, {
        cleanupIDs: true,
    }, {
        cleanupNumericValues: false,
    }, {
        moveElemsAttrsToGroup: true,
    }, {
        moveGroupAttrsToElems: true,
    }, {
        collapseGroups: false,
    }, {
        removeRasterImages: false,
    }, {
        mergePaths: true,
    }, {
        convertShapeToPath: true,
    }, {
        sortAttrs: true,
    }, {
        removeDimensions: false,
    }, {
        removeAttrs: {
            attrs: '(stroke|fill)'
        },
    }]
});

module.exports = {
    svgoInstance: svgo
}
