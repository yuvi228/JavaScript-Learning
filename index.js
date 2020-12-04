

// let name = 'Testing'
// let age = 15
// let ismale = true
// let height = 145.6

// console.log(name+ ' and ' + age + ' '+ ismale + ' ' + height )

// if(age <= 15){
// console.log( 'small')
// }

//     else {
//         console.log( 'High')
//     }

let user = {
    name1: 'Testing',
    age1: 15,
    ismale1: true,
    height1: 145.6
};

console.log(user)
console.log(user.age1)
console.log(user.name1)
console.log(user.height1)
console.log(user.ismale1)

let iser1 = ['Testing', 15, true, 145.6]
console.log(iser1)
console.log(iser1.length)

iser1[iser1.length] = 56
console.log(iser1)
console.log(iser1.length)


function getUserdata() {
    console.log('User age1 is : ' + user.age1)
    console.log('User name1 is : ' + user.name1)
    console.log('User height1 is : ' + user.height1)
    console.log('User ismale1 is : ' + user.ismale1)
}


getUserdata()

function getUsercreddata(uname, pw, email, otp) {
    console.log('User uname is : ' + uname)
    console.log('User pw is : ' + pw)
    console.log('User email is : ' + email)
    console.log('User otp is : ' + otp)
}

getUsercreddata(1, 2, 3, 4)


function add(a, b) {
    let c = console.log(a + b)
    return c
}

add(10, 20)  