
function createEmp(dept, salary, role, one, two) {
    const employee = {
        dept: dept,
        salary: salary,
        role: role,
        project: {
            one: one,
            two: two
        },

        cred() {
            console.log('yrajput');
        }

    }

    return employee;
}


const e1 = createEmp('QA', 50000, 'Tester', 'SAbre', 'Hopscotch');
console.log(e1);
console.log(e1.dept);
console.log(e1.salary);
console.log(e1.role);
console.log(e1.project.one);
console.log(e1.project.two);
e1.cred();

const e2 = createEmp('iPhone', 10000, 'Dev', 'IHealth', 'PLMA');
console.log(e2);
console.log(e2.dept);
console.log(e2.salary);
console.log(e2.role);
console.log(e2.project.one);
console.log(e2.project.two);
e2.cred();