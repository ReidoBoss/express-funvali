const { Task } = require('../models/Task.js')
const {validate} = require('../../option.js')

const create =(req,res)=>{

  req.body.validate(new Task)
  .map((x)=>{
    console.log("this is validated")
    res.status(201).send()
  })
  .getOrElse(()=>{
    console.log("something is wrong brother")
    res.status(400).send()
  })
}

module.exports = {
  create
}
