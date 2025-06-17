const os = require('os')

const user_info = os.userInfo()
console.log(user_info)

console.log("this device is on for "+ os.uptime() +" seconds")


const currentOS = {
    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freemem: os.freemem(),
}
console.log(currentOS)