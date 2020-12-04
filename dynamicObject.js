const employee = {
    dept: 'QA',
    
    project: {
        1: 'Sabre',
        2: 'Hopscotch'
    },

    cred: function () {
        console.log('yrajput');
    }

}
console.log(employee)


// Add other property in Object
employee.salary =  5000,
employee.role = 'Testing'

console.log(employee)

// Remove property from Object

delete employee.salary;

console.log(employee)