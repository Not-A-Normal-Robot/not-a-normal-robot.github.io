"use strict";
const { sleep } = await import('./utils.js');

let inputLock = null;

const terminal = {
    element: document.getElementById('terminal'),
    print: (text) => { terminal.element.textContent += text },
    println: (text) => { terminal.element.textContent += text + '\n' },
    clear: () => { terminal.element.textContent = '' },
    panic: (text) => {
        terminal.element.classList.add('panic');

        terminal.println('FATAL: ' + text);

        const err = Error("Panicked with error " + text);
        err.name = "panic";
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