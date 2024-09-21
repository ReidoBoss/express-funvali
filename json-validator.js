const {Option} = require('./option.js')
function validate(model, json = this,exclude = []){

    if(!isJson(json)) throw "Object must be a JSON"

    model = nonDefaultParams(model)
    json = [...Object.keys(json),...exclude]
    const modelValidation = model.every(m => json.includes(m))
    return new Option(json,modelValidation)

}
function isJson(json){
    if (json && json.constructor === ({}).constructor) {
        return true
    }else {
        false
    }
}
const nonDefaultParams = (model) => {
  let modelKeys = Object.keys(model)
  let validKeys = []
  for(let i = 0 ; i < modelKeys.length ; i ++){
    if((model[`${modelKeys[i]}`]) == undefined) {
      validKeys.push(modelKeys[i])
    }
  }
  return validKeys
}
Object.prototype.validate = validate
module.exports = {
  validate
}
