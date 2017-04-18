"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// --------------------------------------------------
// ezease.ts v0.5.5
// Typescript variation on library by danro
// https://github.com/btesser/ezease
// Generic set of easing functions with AMD support
// https://github.com/danro/easing-js
// This code may be freely distributed under the MIT license
// http://danro.mit-license.org/
// --------------------------------------------------
// All functions adapted from Thomas Fuchs & Jeremy Kahn
// Easing Equations (c) 2003 Robert Penner, BSD license
// https://raw.github.com/danro/easing-js/master/LICENSE
// --------------------------------------------------
function easeInQuad(position) {
    return Math.pow(position, 2);
}
exports.easeInQuad = easeInQuad;
function easeOutQuad(position) {
    return -(Math.pow((position - 1), 2) - 1);
}
exports.easeOutQuad = easeOutQuad;
function easeInOutQuad(position) {
    if ((position /= 0.5) < 1)
        return 0.5 * Math.pow(position, 2);
    return -0.5 * ((position -= 2) * position - 2);
}
exports.easeInOutQuad = easeInOutQuad;
function easeInCubic(position) {
    return Math.pow(position, 3);
}
exports.easeInCubic = easeInCubic;
function easeOutCubic(position) {
    return (Math.pow((position - 1), 3) + 1);
}
exports.easeOutCubic = easeOutCubic;
function easeInOutCubic(position) {
    if ((position /= 0.5) < 1)
        return 0.5 * Math.pow(position, 3);
    return 0.5 * (Math.pow((position - 2), 3) + 2);
}
exports.easeInOutCubic = easeInOutCubic;
function easeInQuart(position) {
    return Math.pow(position, 4);
}
exports.easeInQuart = easeInQuart;
function easeOutQuart(position) {
    return -(Math.pow((position - 1), 4) - 1);
}
exports.easeOutQuart = easeOutQuart;
function easeInOutQuart(position) {
    if ((position /= 0.5) < 1)
        return 0.5 * Math.pow(position, 4);
    return -0.5 * ((position -= 2) * Math.pow(position, 3) - 2);
}
exports.easeInOutQuart = easeInOutQuart;
function easeInQuint(position) {
    return Math.pow(position, 5);
}
exports.easeInQuint = easeInQuint;
function easeOutQuint(position) {
    return (Math.pow((position - 1), 5) + 1);
}
exports.easeOutQuint = easeOutQuint;
function easeInOutQuint(position) {
    if ((position /= 0.5) < 1)
        return 0.5 * Math.pow(position, 5);
    return 0.5 * (Math.pow((position - 2), 5) + 2);
}
exports.easeInOutQuint = easeInOutQuint;
function easeInSine(position) {
    return -Math.cos(position * (Math.PI / 2)) + 1;
}
exports.easeInSine = easeInSine;
function easeOutSine(position) {
    return Math.sin(position * (Math.PI / 2));
}
exports.easeOutSine = easeOutSine;
function easeInOutSine(position) {
    return (-0.5 * (Math.cos(Math.PI * position) - 1));
}
exports.easeInOutSine = easeInOutSine;
function easeInExpo(position) {
    return (position === 0) ? 0 : Math.pow(2, 10 * (position - 1));
}
exports.easeInExpo = easeInExpo;
function easeOutExpo(position) {
    return (position === 1) ? 1 : -Math.pow(2, -10 * position) + 1;
}
exports.easeOutExpo = easeOutExpo;
function easeInOutExpo(position) {
    if (position === 0)
        return 0;
    if (position === 1)
        return 1;
    if ((position /= 0.5) < 1)
        return 0.5 * Math.pow(2, 10 * (position - 1));
    return 0.5 * (-Math.pow(2, -10 * --position) + 2);
}
exports.easeInOutExpo = easeInOutExpo;
function easeInCirc(position) {
    return -(Math.sqrt(1 - (position * position)) - 1);
}
exports.easeInCirc = easeInCirc;
function easeOutCirc(position) {
    return Math.sqrt(1 - Math.pow((position - 1), 2));
}
exports.easeOutCirc = easeOutCirc;
function easeInOutCirc(position) {
    if ((position /= 0.5) < 1)
        return -0.5 * (Math.sqrt(1 - position * position) - 1);
    return 0.5 * (Math.sqrt(1 - (position -= 2) * position) + 1);
}
exports.easeInOutCirc = easeInOutCirc;
function easeOutBounce(position) {
    if ((position) < (1 / 2.75)) {
        return (7.5625 * position * position);
    }
    else if (position < (2 / 2.75)) {
        return (7.5625 * (position -= (1.5 / 2.75)) * position + 0.75);
    }
    else if (position < (2.5 / 2.75)) {
        return (7.5625 * (position -= (2.25 / 2.75)) * position + 0.9375);
    }
    else {
        return (7.5625 * (position -= (2.625 / 2.75)) * position + 0.984375);
    }
}
exports.easeOutBounce = easeOutBounce;
function easeInBack(position) {
    var s = 1.70158;
    return (position) * position * ((s + 1) * position - s);
}
exports.easeInBack = easeInBack;
function easeOutBack(position) {
    var s = 1.70158;
    return (position = position - 1) * position * ((s + 1) * position + s) + 1;
}
exports.easeOutBack = easeOutBack;
function easeInOutBack(position) {
    var s = 1.70158;
    if ((position /= 0.5) < 1)
        return 0.5 * (position * position * (((s *= (1.525)) + 1) * position - s));
    return 0.5 * ((position -= 2) * position * (((s *= (1.525)) + 1) * position + s) + 2);
}
exports.easeInOutBack = easeInOutBack;
function elastic(position) {
    return -1 * Math.pow(4, -8 * position) * Math.sin((position * 6 - 1) * (2 * Math.PI) / 2) + 1;
}
exports.elastic = elastic;
function swingFromTo(position) {
    var s = 1.70158;
    return ((position /= 0.5) < 1) ? 0.5 * (position * position * (((s *= (1.525)) + 1) * position - s)) :
        0.5 * ((position -= 2) * position * (((s *= (1.525)) + 1) * position + s) + 2);
}
exports.swingFromTo = swingFromTo;
function swingFrom(position) {
    var s = 1.70158;
    return position * position * ((s + 1) * position - s);
}
exports.swingFrom = swingFrom;
function swingTo(position) {
    var s = 1.70158;
    return (position -= 1) * position * ((s + 1) * position + s) + 1;
}
exports.swingTo = swingTo;
function bounce(position) {
    if (position < (1 / 2.75)) {
        return (7.5625 * position * position);
    }
    else if (position < (2 / 2.75)) {
        return (7.5625 * (position -= (1.5 / 2.75)) * position + 0.75);
    }
    else if (position < (2.5 / 2.75)) {
        return (7.5625 * (position -= (2.25 / 2.75)) * position + 0.9375);
    }
    else {
        return (7.5625 * (position -= (2.625 / 2.75)) * position + 0.984375);
    }
}
exports.bounce = bounce;
function bouncePast(position) {
    if (position < (1 / 2.75)) {
        return (7.5625 * position * position);
    }
    else if (position < (2 / 2.75)) {
        return 2 - (7.5625 * (position -= (1.5 / 2.75)) * position + 0.75);
    }
    else if (position < (2.5 / 2.75)) {
        return 2 - (7.5625 * (position -= (2.25 / 2.75)) * position + 0.9375);
    }
    else {
        return 2 - (7.5625 * (position -= (2.625 / 2.75)) * position + 0.984375);
    }
}
exports.bouncePast = bouncePast;
function easeFromTo(position) {
    if ((position /= 0.5) < 1)
        return 0.5 * Math.pow(position, 4);
    return -0.5 * ((position -= 2) * Math.pow(position, 3) - 2);
}
exports.easeFromTo = easeFromTo;
function easeFrom(position) {
    return Math.pow(position, 4);
}
exports.easeFrom = easeFrom;
function easeTo(position) {
    return Math.pow(position, 0.25);
}
exports.easeTo = easeTo;
exports.default = {
    swingFromTo: swingFromTo,
    swingFrom: swingFrom,
    swingTo: swingTo,
    easeFromTo: easeFromTo,
    easeFrom: easeFrom,
    easeTo: easeTo,
    easeInQuad: easeInQuad,
    easeOutQuad: easeOutQuad,
    easeInOutQuad: easeInOutQuad,
    easeInCubic: easeInCubic,
    easeOutCubic: easeOutCubic,
    easeInOutCubic: easeInOutCubic,
    easeInQuart: easeInQuart,
    easeOutQuart: easeOutQuart,
    easeInOutQuart: easeInOutQuart,
    easeInQuint: easeInQuint,
    easeOutQuint: easeOutQuint,
    easeInOutQuint: easeInOutQuint,
    easeInSine: easeInSine,
    easeOutSine: easeOutSine,
    easeInOutSine: easeInOutSine,
    easeInExpo: easeInExpo,
    easeOutExpo: easeOutExpo,
    easeInOutExpo: easeInOutExpo,
    easeInCirc: easeInCirc,
    easeOutCirc: easeOutCirc,
    easeInOutCirc: easeInOutCirc,
    easeOutBounce: easeOutBounce,
    easeInBack: easeInBack,
    easeOutBack: easeOutBack,
    easeInOutBack: easeInOutBack,
    bounce: bounce,
    bouncePast: bouncePast,
    elastic: elastic,
};
//# sourceMappingURL=ezease.js.map