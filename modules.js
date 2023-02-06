const os = require('os')
const user_Info = os.userInfo()
// console.log(user_Info);
// console.log(`Hello the system up time is ${os.uptime} second`);

const osModule = {
  type : os.type(),
  eol : os.EOL,
  hostname : os.hostname(),
  arc : os.arch() 
}
console.log(osModule);

