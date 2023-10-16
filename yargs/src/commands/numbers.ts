import { Argv } from "yargs"

function builder(yargs: any) {
    return yargs.commandDir('numbers');
}

export = {
    command: 'numbers <command>',
    describe: 'Do things with your numbers',
    builder: builder,
    handler: function (argv: Argv) {}
}