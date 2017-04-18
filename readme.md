# ezease.js

Migrated easing-js library to typescript and added to npm.

See https://github.com/danro/easing-js for the original library
Generic set of easing functions with AMD support. Examples:
```javascript
import { swingFromTo } from 'ezease';

swingFromTo(.6);
// OR
import * as ezease from 'ezease';
// OR
import ezease from 'ezease';
ezease.easeTo(.5);
```
## Easing Shortcuts

    swingFromTo
    swingFrom
    swingTo
    easeFromTo
    easeFrom
    easeTo
    easeInQuad
    easeOutQuad
    easeInOutQuad
    easeInCubic
    easeOutCubic
    easeInOutCubic
    easeInQuart
    easeOutQuart
    easeInOutQuart
    easeInQuint
    easeOutQuint
    easeInOutQuint
    easeInSine
    easeOutSine
    easeInOutSine
    easeInExpo
    easeOutExpo
    easeInOutExpo
    easeInCirc
    easeOutCirc
    easeInOutCirc
    easeOutBounce
    easeInBack
    easeOutBack
    easeInOutBack
    bounce
    bouncePast
    elastic


## MIT License 

Based on the original [Robert Penner](https://raw.github.com/danro/easing-js/master/LICENSE) equations, and ported over from [Jeremy Kahn's Shifty](https://github.com/jeremyckahn/shifty/) easing methods.

This code may be freely distributed under the MIT license.
http://danro.mit-license.org/
