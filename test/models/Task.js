const {validate} = require('../../json-validator.js')
class Task {
  constructor(name,description,completed = false,id = 0) {
    this.name = name
    this.description = description
    this.completed = completed
    this.id = id
  }

}

module.exports = {
  Task
}
