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
export function easeInQuad(position: number): number {
  return Math.pow(position, 2);
}

export function easeOutQuad(position: number): number {
  return -(Math.pow((position - 1), 2) - 1);
}

export function easeInOutQuad(position: number): number {
  if ((position /= 0.5) < 1) return 0.5 * Math.pow(position, 2);
  return -0.5 * ((position -= 2) * position - 2);
}

export function easeInCubic(position: number): number {
  return Math.pow(position, 3);
}

export function easeOutCubic(position: number): number {
  return (Math.pow((position - 1), 3) + 1);
}

export function easeInOutCubic(position: number): number {
  if ((position /= 0.5) < 1) return 0.5 * Math.pow(position, 3);
  return 0.5 * (Math.pow((position - 2), 3) + 2);
}

export function easeInQuart(position: number): number {
  return Math.pow(position, 4);
}

export function easeOutQuart(position: number): number {
  return -(Math.pow((position - 1), 4) - 1);
}

export function easeInOutQuart(position: number): number {
  if ((position /= 0.5) < 1) return 0.5 * Math.pow(position, 4);
  return -0.5 * ((position -= 2) * Math.pow(position, 3) - 2);
}

export function easeInQuint(position: number): number {
  return Math.pow(position, 5);
}

export function easeOutQuint(position: number): number {
  return (Math.pow((position - 1), 5) + 1);
}

export function easeInOutQuint(position: number): number {
  if ((position /= 0.5) < 1) return 0.5 * Math.pow(position, 5);
  return 0.5 * (Math.pow((position - 2), 5) + 2);
}

export function easeInSine(position: number): number {
  return -Math.cos(position * (Math.PI / 2)) + 1;
}

export function easeOutSine(position: number): number {
  return Math.sin(position * (Math.PI / 2));
}

export function easeInOutSine(position: number): number {
  return (-0.5 * (Math.cos(Math.PI * position) - 1));
}

export function easeInExpo(position: number): number {
  return (position === 0) ? 0 : Math.pow(2, 10 * (position - 1));
}

export function easeOutExpo(position: number): number {
  return (position === 1) ? 1 : -Math.pow(2, -10 * position) + 1;
}

export function easeInOutExpo(position: number): number {
  if (position === 0) return 0;
  if (position === 1) return 1;
  if ((position /= 0.5) < 1) return 0.5 * Math.pow(2, 10 * (position - 1));
  return 0.5 * (-Math.pow(2, -10 * --position) + 2);
}

export function easeInCirc(position: number): number {
  return -(Math.sqrt(1 - (position * position)) - 1);
}

export function easeOutCirc(position: number): number {
  return Math.sqrt(1 - Math.pow((position - 1), 2));
}

export function easeInOutCirc(position: number): number {
  if ((position /= 0.5) < 1) return -0.5 * (Math.sqrt(1 - position * position) - 1);
  return 0.5 * (Math.sqrt(1 - (position -= 2) * position) + 1);
}

export function easeOutBounce(position: number): number {
  if ((position) < (1 / 2.75)) {
    return (7.5625 * position * position);
  } else if (position < (2 / 2.75)) {
    return (7.5625 * (position -= (1.5 / 2.75)) * position + 0.75);
  } else if (position < (2.5 / 2.75)) {
    return (7.5625 * (position -= (2.25 / 2.75)) * position + 0.9375);
  } else {
    return (7.5625 * (position -= (2.625 / 2.75)) * position + 0.984375);
  }
}

export function easeInBack(position: number): number {
  var s = 1.70158;
  return (position) * position * ((s + 1) * position - s);
}

export function easeOutBack(position: number): number {
  var s = 1.70158;
  return (position = position - 1) * position * ((s + 1) * position + s) + 1;
}

export function easeInOutBack(position: number): number {
  var s = 1.70158;
  if ((position /= 0.5) < 1) return 0.5 * (position * position * (((s *= (1.525)) + 1) * position - s));
  return 0.5 * ((position -= 2) * position * (((s *= (1.525)) + 1) * position + s) + 2);
}

export function elastic(position: number): number {
  return -1 * Math.pow(4, -8 * position) * Math.sin((position * 6 - 1) * (2 * Math.PI) / 2) + 1;
}

export function swingFromTo(position: number): number {
  var s = 1.70158;
  return ((position /= 0.5) < 1) ? 0.5 * (position * position * (((s *= (1.525)) + 1) * position - s)) :
    0.5 * ((position -= 2) * position * (((s *= (1.525)) + 1) * position + s) + 2);
}

export function swingFrom(position: number): number {
  var s = 1.70158;
  return position * position * ((s + 1) * position - s);
}

export function swingTo(position: number): number {
  var s = 1.70158;
  return (position -= 1) * position * ((s + 1) * position + s) + 1;
}

export function bounce(position: number): number {
  if (position < (1 / 2.75)) {
    return (7.5625 * position * position);
  } else if (position < (2 / 2.75)) {
    return (7.5625 * (position -= (1.5 / 2.75)) * position + 0.75);
  } else if (position < (2.5 / 2.75)) {
    return (7.5625 * (position -= (2.25 / 2.75)) * position + 0.9375);
  } else {
    return (7.5625 * (position -= (2.625 / 2.75)) * position + 0.984375);
  }
}

export function bouncePast(position: number): number {
  if (position < (1 / 2.75)) {
    return (7.5625 * position * position);
  } else if (position < (2 / 2.75)) {
    return 2 - (7.5625 * (position -= (1.5 / 2.75)) * position + 0.75);
  } else if (position < (2.5 / 2.75)) {
    return 2 - (7.5625 * (position -= (2.25 / 2.75)) * position + 0.9375);
  } else {
    return 2 - (7.5625 * (position -= (2.625 / 2.75)) * position + 0.984375);
  }
}

export function easeFromTo(position: number): number {
  if ((position /= 0.5) < 1) return 0.5 * Math.pow(position, 4);
  return -0.5 * ((position -= 2) * Math.pow(position, 3) - 2);
}

export function easeFrom(position: number): number {
  return Math.pow(position, 4);
}

export function easeTo(position: number): number {
  return Math.pow(position, 0.25);
}
export default {
  swingFromTo,
  swingFrom,
  swingTo,
  easeFromTo,
  easeFrom,
  easeTo,
  easeInQuad,
  easeOutQuad,
  easeInOutQuad,
  easeInCubic,
  easeOutCubic,
  easeInOutCubic,
  easeInQuart,
  easeOutQuart,
  easeInOutQuart,
  easeInQuint,
  easeOutQuint,
  easeInOutQuint,
  easeInSine,
  easeOutSine,
  easeInOutSine,
  easeInExpo,
  easeOutExpo,
  easeInOutExpo,
  easeInCirc,
  easeOutCirc,
  easeInOutCirc,
  easeOutBounce,
  easeInBack,
  easeOutBack,
  easeInOutBack,
  bounce,
  bouncePast,
  elastic,
};