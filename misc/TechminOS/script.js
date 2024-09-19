"use strict";
const { default: init } = await import('./modules/init.js');

try {
    
    await init();
} catch (e) {
    if(
        typeof e !== 'object' ||
        e.name !== 'panic'
    ) {
        console.error(e);
    }
}