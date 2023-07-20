const os = require('os')
const user= os.userInfo()
uptime = os.uptime()
const currentos = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(`This System uptime is ${uptime} Seconds`)
console.log(user)
console.log(currentos)