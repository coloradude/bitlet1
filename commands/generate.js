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

  if (fs.existsSync('./bitmovin-player-ios-samples')){
    fs.rmSync('./bitmovin-player-ios-samples', {recursive: true})
  }

  shell.cd('./' || path)
  shell.exec('git clone https://github.com/bitmovin/bitmovin-player-ios-samples.git')
  shell.cd('bitmovin-player-ios-samples')
  shell.exec('pod repo update')
  shell.exec('pod install')
}

const createAndroidTemplate = path => {

  if (fs.existsSync('./bitmovin-player-android-samples')){
    fs.rmSync('./bitmovin-player-android-samples', {recursive: true})
  }

  
  shell.cd('./' || path)
  shell.exec('git clone https://github.com/bitmovin/bitmovin-player-android-samples.git')
  shell.cd('bitmovin-player-android-samples')


  // Testing how to add configs automagically

  // const extraConfig = `compileOptions {
  //   sourceCompatibility JavaVersion.VERSION_1_8
  //   targetCompatibility JavaVersion.VERSION_1_8
  // }`


  // const currentGradle = fs.readFileSync('./build.gradle', 'utf8')
  // const newGradle = fs.appendFileSync(currentGradle, extraConfig)
  // console.log(newGradle)
  // // () => {
  // //   const gradle = fs.appendFileSync('./bitmovin-player-android-samples/build.gradle', extraConfig)
  //   console.log(gradle)

  // // shell.exec('./gradlew build')
}

const createRokuTemplate = path => {

  if (fs.existsSync('./bitmovin-player-roku-samples')){
    fs.rmSync('./bitmovin-player-roku-samples', {recursive: true})
  }

  shell.cd('./' || path)
  shell.exec('git clone git@github.com:bitmovin/bitmovin-player-roku-samples.git')
  shell.cd('bitmovin-player-roku-samples')
  
}

export {
  createWebTemplate,
  createTizenTemplate,
  createWebOSTemplate,
  createiOSTemplate,
  createAndroidTemplate,
  createRokuTemplate
}