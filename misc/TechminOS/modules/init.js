"use strict";
const { default: terminal } = await import('./terminal.js');
const { sleep } = await import ('./utils.js');

const startText =
`[][]    TechminOS Pre-Alpha
  [][]  Version 0.0.0.20240919
        
        © 1989 26F-Studio

Starting up...
`;

async function startupAnim() {
    terminal.element.textContent = startText;

    await sleep(753);

    terminal.println("CPU: 1x Intel Pentium Pro @ 166 MHz OK");
    
    await sleep(3926);
    
    terminal.println("RAM: 65,536 KB OK");
    
    await sleep(2961);

    terminal.println("/dev/sda1: clean, 1726/65536 files, 7261/262144 blocks");

    await sleep(386);

    terminal.println("Starting services...");
}

function hasSetUp() {
    return localStorage.getItem('setup') === 'true';
}

async function initInner() {
    await startupAnim();

    if(!hasSetUp()) {
        const { setup } = await import('./setup.js');

        await setup();
    }

    const { login } = await import('./login.js');

    login();
}

async function init() {
    try {
        await initInner();
    } catch(e) {
        /** @type {string} */
        const message =
            typeof e === 'string' ? e :
            (
                ( typeof e === 'object' && 'message' in e ) ?
                e.message : "An unknown error was thrown! Please check the console for more information."
            );

        terminal.panic(message);
        console.error(e);
    }
}

export default init;