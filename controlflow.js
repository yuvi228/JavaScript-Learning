let hour = 19.5

if (hour >= 6 && hour < 12) console.log('Good');
else if (hour >= 12 && hour < 19) console.log('Better');
else console.log('Best');

let a = 10220
let b = 1200
let c = 300

if (a > b && a > c) console.log('a is greatest')
else if (b > c) console.log('b is greatest')
else console.log('c is greatest')


// Switch Case



function getCredasperRole(role) {
    let username;
    let password;
    switch (role) {
        case 'estimator':
            cred = {
                username: 'Test Estimator',
                password: 'Sabre2022'
            };
            return cred;
            break;
        case 'Engineer':
            cred = {
                username: 'Test Engineer',
                password: 'Sabre2019'
            };
            return cred;
            break;
        case 'Purchaser':
            cred = {
                username: 'TestPurchaser',
                password: 'S@bre2020!'
            };
            return cred;
            break;



    }
}

let logincred = getCredasperRole('estimator')
console.log(logincred)
console.log(logincred.username)
console.log(logincred.password)
