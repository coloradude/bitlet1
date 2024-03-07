import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

const createWebTemplate = path => {
  const webHtml = fs.readFileSync(`${__dirname}/../templates/web.html`, 'utf8')

  fs.writeFileSync(`./index.html`, webHtml)

  // if (path) {
  //   console.log('There is a path?')
  //   fs.writeFileSync(`${path}/index.html`, webHtml)
  // } else {
  //   console.log('There is NO PATH')
  //   fs.writeFileSync(`${__dirname}/index.html`, webHtml)
  // }
  
}

export default createWebTemplate