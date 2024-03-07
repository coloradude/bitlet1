import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

import shell from 'shelljs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const createWebTemplate = path => {
  const webHtml = fs.readFileSync(`${__dirname}/../templates/web.html`, 'utf8')
  fs.writeFileSync(`./index.html`, webHtml)
}

const createTizenTemplate = path => {
  shell.cd('./' || path)
  shell.exec('git clone https://github.com/bitmovin/bitmovin-player-tizen-demo.git')
}

const createWebOSTemplate = path => {
  shell.cd('./' || path)
  shell.exec('git clone https://github.com/bitmovin/bitmovin-player-webos-demo.git')
}

const createiOSTemplate = path => {
  shell.cd('./' || path)
  shell.exec('git clone https://github.com/bitmovin/bitmovin-player-ios-samples.git')
}

const createAndroidTemplate = path => {
  shell.cd('./' || path)
  shell.exec('git clone https://github.com/bitmovin/bitmovin-player-android-samples.git')
}

export {
  createWebTemplate,
  createTizenTemplate,
  createWebOSTemplate,
  createiOSTemplate,
  createAndroidTemplate
}