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


// const copyobject = {}
// console.log(copyobject)

// for(let  key in employee){
//     copyobject[key] = employee[key]

// }

// console.log(copyobject)


// let copyobject = {}
// console.log(copyobject)

// copyobject = Object.assign({},employee)

// console.log(copyobject)


// Add Additional property in Source Object
let copyobject1 = {}
console.log(copyobject1)

copyobject1 = Object.assign({color : 'Red'},employee)

console.log(copyobject1)

copyobject1.cred();



// SPread Operator
console.log('SPread Operator')
let c2 = {...employee};
console.log(c2)