const ex = function (t1, t2, t3, ...rest) {
  console.log({context: this })
  console.log(...arguments, this, { sum: t1 + t2 + t3 })
}
// interview task
// const test = ex.bind(null, 3)
// test(5, 1, 0)

/*
  BIND: binds the this value, returns a new function, and allows you to pass in a list of arguments.
*/
const fx = ex.bind({test: 123}, 5, 2).bind({lol: 123}, 1, 1) // creates new fun ex(t3) and first and second is [5, 2]
console.log(fx)
// if first param is null context on global obj

// Test outputs
// ex(2, 2, 2)
fx(2, 3, 3)

/*
  CALL: binds the this value, invokes the function, and allows you to pass a list of arguments.
  note: can be used in constructor unions(as well as apply) see union-of-constructors.js
*/

// Test outputs
// ex(2, 2, 2)
// ex.call({test: 'test'}, 2)

/*
 * APPLY: binds the this value, invokes the function, and allows you to pass arguments as an array.
 * */

// Test outputs
// ex(2, 2, 2)
// ex.apply({test: 'test'}, [2, 2])

const obj = {
  data: 11,
  fnc: () => {
    return this.data
  },
}

;(function (fn) {
  // need to add bind
  // console.log(fn());
})(obj.fnc)

console.log('-=--', obj.fnc())