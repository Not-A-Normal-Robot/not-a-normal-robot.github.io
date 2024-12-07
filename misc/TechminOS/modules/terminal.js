"use strict";
const { sleep } = await import('./utils.js');

let isInputting = false;
let buffer = '';

const terminal = {
    element: document.getElementById('terminal'),
    print: (text) => {
        if(isInputting) {
            buffer += text;
        } else {
            terminal.element.textContent += text
        }
    },
    println: (text) => { terminal.print(text + '\n') },
    clear: () => { terminal.element.textContent = '' },
    panic: /**@param {string} text */ (text, log = true) => {
        terminal.element.classList.add('panic');

        terminal.println('FATAL: ' + text);

        const err = Error("Panicked with error " + text);
        err.name = "panic";

        if(log) {
            console.error("[PANIC]", text);
        }
        throw err;
    },
    type: async (text, avgDelay = 54) => {
        for(let i = 0; i < text.length; i++) {
            const realDelay = avgDelay * (1 + 0.25 * Math.random());
            await sleep(realDelay);
            terminal.print(text[i]);
        }
    }
}

export default terminal;