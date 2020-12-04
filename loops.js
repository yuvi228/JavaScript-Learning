
// for Loop
for (let i = 1; i <= 5; i++) {
    console.log(i)
    console.log('This is For Loop')
}


// while loop
let i = 1;
while (i <= 5) {
    console.log(i)
    console.log('This is while Loop')
    i++;
}


// Do while Loop

let p = 1;
do {
    console.log(p)
    p++;
    console.log('This is Do while Loop')
} while (p <= 10);


// for objects

const person = {
    name: 'john',
    age: 25
};

for (let key in person) {
    console.log(key, person[key])

}

const persons = [1, 2, 3]

for (let index in persons) {
    console.log(index, persons[index]);
}


for (let index of persons) {
    console.log(index);
}