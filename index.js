#! /usr/bin/env node
import { program } from 'commander'
import {
  createWebTemplate,
  createTizenTemplate,
  createWebOsTemplate
} from './commands/generate.js'

program
    // .command('web <path>')
  .command('web')
  .option('-p, --path <path>', "Specify the path where the template will go", '.')
  .description('Create Bitmovin Web SDK sample project')
  .action(createWebTemplate)

program
  .command('tizen')
  .description('Create Bitmovin Tizen sample project')
  .action(createTizenTemplate)

program
  .command('webos')
  .description('Create Bitmovin WebOS sample project')
  .action(createWebOsTemplate)

program.parse()