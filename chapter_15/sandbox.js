// const userOne = {
//     username: 'ryu',
//     email: 'ryu@thenetninja.co.uk',
//     login(){
//         console.log('the user logged in');
//     },
//     logout(){
//         console.log('the user logged out');
//     }
// };

// console.log(userOne.email, userOne.username);

// class User{
//     constructor(username, email){
//         this.username = username;
//         this.email = email;
//         this.score = 0;
//     }
//     login(){
//         console.log(`${this.username} just logged in`);
//         return this;
//     }
//     logout(){
//         console.log(`${this.username} just logged out`);
//         return this;
//     }
//     incScore(){
//         this.score ++;
//         console.log(`${this.username} has a score of ${this.score}`);
//         return this;
//     }
// }

// class Admin extends User{
//     constructor(username, email, title){
//         super(username, email);
//         this.title = title;
//     }
//     deleteUser(user){
//         users = users.filter((u) => {
//             return u.username !== user.username;
//         })
//     }
// }

function User(username, email){
    this.username = username;
    this.email = email;
};

function Admin(username, email, title){
    User.call(this, username, email);
    this.title = title;
};

User.prototype.login = function(){
    console.log(`${this.username} has logged in`)
};
User.prototype.logout = function(){
    console.log(`${this.username} has logged out`);
};

Admin.prototype = Object.create(User.prototype);
Admin.prototype.deleteUser = function(){
    // delete a user
};

const userOne = new User('mario', 'mario@thenetninja.com');
const userTwo = new User('luigi', 'luigi@thenetninja.com');
const userThree = new Admin('shaun', 'shaun@thenetninja.com', 'black-belt ninja');
console.log(userOne, userTwo, userThree);
// userOne.login();
// const userThree = new Admin('shaun', 'shaun@thenetninja.co.uk', 'super ninja');
// console.log(userThree);
// the 'new' keyword
// 1 = it creates a new empty object
// 2 = it binds the value of 'this' to the new empty object
// 3 = it calls the constructor function to 'build' the object
// let users = [userOne, userTwo, userThree];
// console.log(users);
// userThree.deleteUser(userTwo);
// console.log(users);