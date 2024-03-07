import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

import shell from 'shelljs'

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

const createWebTemplate = path => {
  const webHtml = fs.readFileSync(`${__dirname}/../templates/web.html`, 'utf8')
  fs.writeFileSync(`./index.html`, webHtml)
}

const createTizenTemplate = path => {
  shell.cd('./' || path)
  shell.exec('git clone https://github.com/bitmovin/bitmovin-player-tizen-demo.git')
}

const createWebOsTemplate = path => {
  shell.cd('./' || path)
  shell.exec('git clone git@github.com:bitmovin/bitmovin-player-webos-demo.git')
}

export {
  createWebTemplate,
  createTizenTemplate,
  createWebOsTemplate
}