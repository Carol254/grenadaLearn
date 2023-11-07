const os = require('os');

//info abt current user
const user = os.userInfo();
console.log(user);

//returns the systems uptime  in seconds
console.log(`The system UpTime is ${os.uptime()} seconds`);