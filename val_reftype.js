// Value type
// number, string, boolean, symbol, undefined, null


let x = 10
y = x
x = 20

console.log(x)
console.log(y)

//ref type
//object, array, function

let p = {
    value: 'test'
}

q = p;

p.value = 20;
console.log(p.value)
console.log(q.value)
console.log(typeof (q))