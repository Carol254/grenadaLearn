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