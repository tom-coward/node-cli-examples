"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function builder(yargs) {
    return yargs.commandDir('numbers');
}
module.exports = {
    command: 'numbers <command>',
    describe: 'Do things with your numbers',
    builder: builder,
    handler: function (argv) { }
};
//# sourceMappingURL=numbers.js.map