const startText = 
`[][]    TechminOS Pre-Alpha
  [][]  Version 0.0.0.20240918
        
        © 1989 26F-Studio

Starting up...
`;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const body = document.body;
const terminal = {
    element: document.createElement('pre'),
    print: (text) => { terminal.element.textContent += text },
    println: (text) => { terminal.element.textContent += text + '\n' },
    clear: () => { terminal.element.textContent = '' },
    panic: (text) => {
        terminal.element.classList.add('panic');

        terminal.println('FATAL: ' + text);

        throw new Error("Panicked with error " + text);
    },
    type: async (text, avgDelay = 54) => {
        for(let i = 0; i < text.length; i++) {
            const realDelay = avgDelay * (1 + 0.25 * Math.random());
            await sleep(realDelay);
            terminal.print(text[i]);
        }
    }
};

async function start() {
    terminal.element.id = 'terminal';
    terminal.element.textContent = startText;
    body.appendChild(terminal.element);

    await sleep(753);

    terminal.println("CPU: 1x Intel Pentium Pro @ 166 MHz OK");
    
    await sleep(3926);
    
    terminal.println("RAM: 65,536 KB OK");
    
    await sleep(2961);

    terminal.println("/dev/sda1: clean, 1726/65536 files, 7261/262144 blocks");

    await sleep(386);

    terminal.println("Starting services...");

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

function update() {

}

start();