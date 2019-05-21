// object literals

let user = {
    name: 'crystal',
    age: 30,
    email: 'crystal@techninja.co.uk',
    location: 'berlin',
    blogs: ['why mac & cheese rules', '10 things to make with marmite'],
    login: function(){
        console.log('the user logged in');
    },
    logout: function(){
        console.log("the user logged out");
    },
    logBlogs: function(){
        console.log(this);
        this.blogs.forEach( blog => console.log(blog));
    }
    // logBlogs: () => {
    //     console.log(this);
    // }
};

// console.log(user);
// console.log(user.name);
// console.log(user.age);
// console.log(user['email']);
// user['name'] = 'chun-li';
// console.log(user["name"]);

// console.log(typeof (user.greet));
user.logBlogs();
console.log(this);