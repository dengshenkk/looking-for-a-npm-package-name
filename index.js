const fetch = require('node-fetch')
const fs = require('fs')
const {resolve} = require('path')
const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

(async () => {
  for (const first of alphabet) {
    // for (const second of alphabet) {
      for (const third of alphabet) {
        try {
          const p = await (
            await fetch(`https://registry.npmjs.org/${ first }${ third }`)
          ).json()
          console.log(`find :`, first + third)

          if (p.error) { // Couln't find a package with the tested name
            console.log(first + third, 'isn\'t in use.')
            fs.appendFileSync('./result2.json', first + third, 'isn\'t in use.')
          }
        } catch (e) {
          console.log(e)
        }
      // }
    }
  }
  console.log('任务完成')
})()
