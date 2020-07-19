function NoES6Funcion(name, age, country){
  
  var name = name || 'undefined'
  var age = age || 'undefined'
  var country = country || 'undefined'

  console.log(name, age, country)
}

//es6
function ES6Function(name='undefined', age='undefined', country='undefined'){
  console.log(name, age, country)
}

const text = `This 
              is 
              text`

var OBJ = {
  'exists': true
}

const {exists} = OBJ

console.log(exists)
//console.log(OBJ.exists)

let team = ['hello', 'world']
let team2 = ['HELLO', 'WORLD']

let ARR = [...team, ...team2]
var flag = isNaN

var name = 'Gael'
var edad = 12

//no es6
/*
obj = {
  name: name,
  edad: edad
}
*/

var obj = { name, edad }
const { name, edad } = obj
