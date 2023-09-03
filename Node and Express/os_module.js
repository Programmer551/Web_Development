const os=require("os")

// console.log(os)

// const user=os.userInfo()

// console.log(user)

// console.log(os.uptime())

const curruntos={
name:os.type(),
release:os.release(),
totalmem:os.totalmem(),
freemem:os.freemem(),
}
console.log(curruntos)

