"use strict";
exports.id = 758;
exports.ids = [758];
exports.modules = {

/***/ 758:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* reexport */ Image_0)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./Image.tsx



const Image = ({ src , width =160 , height =90 , layout ="intrinsic" , objectFit ="cover" , alt ="" , className , priority =false , showNoImage =false , loading ="lazy" ,  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {
        children: src ? /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
            src,
            alt,
            width,
            height,
            layout,
            loading,
            priority,
            objectFit,
            className
        }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
            children: showNoImage && /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                src: src ? src : "/images/no-image.jpg",
                alt,
                width,
                height,
                layout,
                className,
                objectFit
            })
        })
    });
};
/* harmony default export */ const Image_0 = (Image);

;// CONCATENATED MODULE: ./index.ts



/***/ })

};
;