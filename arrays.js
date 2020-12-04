let days = [1, 2, 3, 4, 5, 6, 7]

console.log(days)
console.log(days.length)
console.log(days[1])
console.log(days[7])


// add number at end of array

days.push(8, 9)
console.log(days)

// add number at Begin of array

days.unshift(0)
console.log(days)

// add number at middle of array

days.splice(2, 0, 'a', 'b')
console.log(days)


// Remove number at end of array
let month = ['jan', 'Feb', 'March', 'April', 'May', 'June', 'July']
month.pop();
console.log(month)

// Remove number at Begin of array
month.shift();
console.log(month)

// Remove number at middle of array
month.splice(2, 2)
console.log(month)

month = []

console.log(month)


// Print array
for (const iterator of days) {
    console.log(iterator);
}


// Find index of element in array
console.log(days.indexOf(2));

// Check if value in array or not
console.log(days.includes(4))


const courses = [

    {
        name: 'yuvraj'
    }, {
        name: 'John'
    }

]

const a = courses.find(function (course, value) {
    return course.name === 'yuvraj';
})

console.log(a);


const b = courses.findIndex(function (course, value) {
    return course.name === 'yuvraj';
})
console.log(b);