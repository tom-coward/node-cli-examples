import { Argv } from "yargs";

type RandomNumberOptions = {
  min: number,
  max: number
}

async function handler(options: RandomNumberOptions) {
  const randomNumber = Math.floor(Math.random() * options.max) + options.min;
  console.info(randomNumber);
}

// https://github.com/yargs/yargs/blob/main/docs/advanced.md#providing-a-command-module
module.exports = {
  command: 'random',
  describe: 'Generate a random number between min and max',
  builder: (argv: Argv<RandomNumberOptions>) => {
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
}
