#!/usr/bin/env node
import yargs from 'yargs';

yargs
    .strict()
    .help()
    .commandDir('./commands')
    .demandCommand()
    .argv;