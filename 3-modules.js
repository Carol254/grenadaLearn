const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative');

require('./7-grenade');

sayHi('penina');
sayHi(names.john);
sayHi(names.peter);

console.log(data);

//OS Module
const { log } = require('console');
const os = require('os');

//info abt current user
const user = os.userInfo();
console.log(user);

//returns the systems uptime  in seconds
console.log(`The system UpTime is ${os.uptime()} seconds`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOS);