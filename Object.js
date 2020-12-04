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

}


console.log(employee);
console.log(employee.dept);
console.log(employee.salary);
console.log(employee.role);
console.log(employee.project);
console.log(employee.project[1]);
console.log(employee.project[2]);


employee.cred();

