#! /usr/bin/env node
import { program } from 'commander'

import {
  createWebTemplate,
  createTizenTemplate,
  createWebOSTemplate,
  createiOSTemplate,
  createAndroidTemplate,
  createRokuTemplate
} from './commands/generate.js'

program
  .command('web')
  .description('Create Bitmovin Web SDK sample project')
  .action(createWebTemplate)

program
  .command('tizen')
  .description('Create Bitmovin Tizen sample project')
  .action(createTizenTemplate)

program
  .command('webos')
  .description('Create Bitmovin WebOS sample project')
  .action(createWebOSTemplate)

program
  .command('ios')
  .description('Create Bitmovin iOS sample project')
  .action(createiOSTemplate)

program
  .command('android')
  .description('Create Bitmovin Android sample project')
  .action(createAndroidTemplate)

program
  .command('roku')
  .description('Create Bitmovin Android sample project')
  .action(createRokuTemplate)


program.parse()