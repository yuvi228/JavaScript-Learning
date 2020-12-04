const employee = {
    dept: 'QA',
    salary: 5000,
    role: 'Testing',
    project: {
        1: 'Sabre',
        2: 'Hopscotch'
    },

    cred: function () {
        console.log('yrajput');
    }

};

// for in loop
for (const key in employee) {
    if (employee.hasOwnProperty(key)) {
        const element = employee[key];
        console.log(element)
    }
}

for (const key in employee) {
    console.log(key, employee[key])
}


// for of Loop

for (const iterator of Object.keys(employee)) {
    console.log(iterator)
}

for (const iterator of Object.entries(employee)) {
    console.log(iterator)
}

// Check property in Object

if ('dept' in employee) {
    console.log('Present')
}

if ('test' in employee) {
    console.log('Present')
} else {
    console.log('not Present')
}