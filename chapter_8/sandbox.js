const form = document.querySelector("form");
const feedback = document.querySelector(".feedback");
const usernamePattern = /^[a-zA-Z]{6,12}$/;
//const username = document.querySelector("#username");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    // validation
    const username = form.username.value;
    
    if (usernamePattern.test(username)){
        console.log("the username is valid");
        feedback.textContent = "that username is valid";

    }else{
        console.log("the username is not valid");
        feedback.textContent = "username must contain letters only and be between 6 and 12 chars long";
    }
    
});

// live feedback
form.username.addEventListener("keyup", e => {
    console.log(e);
    //console.log(e.target.value, form.username.value);
    if (usernamePattern.test(e.target.value)){
        console.log("passed");
        form.username.setAttribute("class", "success");
    } else {
        console.log("failed");
        form.username.setAttribute("class", "error");
    }
});

// regex
// const username = "shawewun";
// const pattern = /^[a-z]{6,}$/;
// let result = pattern.test(username);
// console.log(result);

// if (result){
//     console.log("the regex test passed :)")
// }else{
//     console.log("regex test failed :(");
// }
// let result = username.search(pattern);
// console.log(result === 0);