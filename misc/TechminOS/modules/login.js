"use strict";

const terminal = await import('./terminal.js');
const { sleep } = await import('./utils.js');

function getDeviceName() {
    return localStorage.getItem('deviceName') || '26f';
}

function getUsername() {
    return localStorage.getItem('username') || 'mrz626';
}

export async function login() {
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