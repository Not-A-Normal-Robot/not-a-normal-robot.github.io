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

async function init() {
    await startupAnim();

    if(!hasSetUp()) {
        const { setup } = import('./setup.js');

        await setup();
    }

    const { login } = import('./login.js');

    login();

    await sleep(7610);

    terminal.print("\nLogin for dev: ");

    await sleep(726);

    await terminal.type("mrz626\n");

    terminal.print("Password for mrz626: ");

    await sleep(1792);

    terminal.println("\n");

    await sleep(926);

    terminal.println("\nWelcome to TechminOS!");

    await sleep(862);

    terminal.println(`Today is ${new Date(Date.now()).toLocaleDateString('en-US')}\n`);

    await sleep(2048);

    terminal.print("mrz626@TechminOS:~$ ");
}

export default init;