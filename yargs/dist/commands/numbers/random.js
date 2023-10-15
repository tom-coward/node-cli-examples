"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
function handler(options) {
    return __awaiter(this, void 0, void 0, function* () {
        const randomNumber = Math.floor(Math.random() * options.max) + options.min;
        console.info(randomNumber);
    });
}
// https://github.com/yargs/yargs/blob/main/docs/advanced.md#providing-a-command-module
module.exports = {
    command: 'random',
    describe: 'Generate a random number between min and max',
    builder: (argv) => {
        return argv
            .option('min', {
            describe: 'minimum value',
            demand: 'a minimum value is required',
            type: 'number'
        })
            .option('max', {
            describe: 'maximum value',
            demand: 'a maximum value is required',
            type: 'number'
        });
    },
    handler: handler
};
//# sourceMappingURL=random.js.map