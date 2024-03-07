#! /usr/bin/env node
import { program } from 'commander'
import createWebTemplate from './commands/generate.js'

program
    // .command('web <path>')
    .command('web')
    .option('-p, --path <path>', "Specify the path where the template will go", '.')
    .description('Create Bitmovin Web SDK sample project')
    .action(createWebTemplate)

program.parse()