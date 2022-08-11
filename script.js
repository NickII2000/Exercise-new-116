'use strict';
// yourScript.js
import { tns } from "./node_modules/tiny-slider/src/tiny-slider";

tns({
    container: '.my-slider',
    items: 2,
    slideBy: 'page',
    autoplay: true,
    mode: "carousel",
    speed: 300,
    gutter: 10
});