let x = 10
let y = 5

// Artithmetic Opwrator
console.log('Artithmetic Opwrator')
console.log(x + y)
console.log(x - y)
console.log(x * y)
console.log(x / y)
console.log(x ** y)
console.log('*******************')

console.log(x++)
console.log(x)
console.log(++x)
console.log(x)
console.log(x--)
console.log(x)
console.log(--x)
console.log(x)
console.log('*******************')


console.log('Assignment Operator')
let p = 10;
let q = p + 5;
console.log(q)

p = p + 15
p += 15
console.log(p)

console.log('*******************')


console.log('Comparison Operator')
let i = 10;

console.log(i >= 5)
console.log(i === 10)
console.log(true === 1)

console.log('*******************')


console.log('Ternary Operator')

let price = 100
console.log(price > 50 ? 'Costly' : 'Cheap')


console.log('*******************')


console.log('Logical Operator')
let d = 10
let e = 5

console.log('AND Operator')
console.log(d > 5 && e > 3)
console.log(d > 11 && e > 3)
console.log(d > 5 && e > 6)
console.log(d > 11 && e > 6)

console.log('OR Operator')
console.log(d > 5 || e > 3)
console.log(d > 11 || e > 3)
console.log(d > 5 || e > 6)
console.log(d > 11 || e > 6)

console.log('NOT Operator')
let f = 10
console.log(!(f > 10))


console.log('Falsy Operator')
let hair = 'black'
let skin = 'cream'
console.log(hair || skin)
hair = null
console.log(hair || skin)
hair = undefined
console.log(hair || skin)
hair = 0
console.log(hair || skin)



console.log('swap Data')
let v = 45
let n = 85
console.log(v)
console.log(n)
temp = v
v = n
n = temp
console.log(v)
console.log(n)
console.log(temp)
