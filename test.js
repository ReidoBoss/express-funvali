const {Option} = require('./option.js')



const optTest = new Option("Test",true)


// const promiseTest = Promise.resolve(15)
// promiseTest.then(console.log)

optTest.map(console.log).getOrElse(()=>{
    console.log("this is else")
  })
