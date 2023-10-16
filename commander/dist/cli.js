"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const extra_typings_1 = require("@commander-js/extra-typings"); // https://github.com/commander-js/extra-typings
const program = new extra_typings_1.Command();
program
    .name('numbers-cli')
    .showHelpAfterError()
    .description('Do things with numbers')
    .version('1.0.0 (SDK: 1.0.0)'); // --version (https://github.com/tj/commander.js?#version-option)
const numbers = program.command('numbers');
numbers.command('random')
    .description('Generate a random number between min and max')
    .argument('<min>', 'minimum value', Number)
    .argument('<max>', 'maximum value', Number)
    .action((min, max) => {
    const randomNumber = Math.floor(Math.random() * max) + min;
    console.info(randomNumber);
});
program.parse();
//# sourceMappingURL=cli.js.map