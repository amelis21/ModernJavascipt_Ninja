// const button = document.querySelector('button');
// button.addEventListener('click', () => {
//     console.log("You clicked me");
// });
const ul = document.querySelector('ul');
const button = document.querySelector("button");
button.addEventListener("click", () => {
    const li = document.createElement("li");
    li.textContent = "new todo";
    ul.append(li);
});

const items = document.querySelectorAll('li');
items.forEach( item => item.addEventListener('click', e => {
    // console.log("item clicked");
    // console.log(e.target);
    // console.log(item);
    // e.target.style.textDecoration = 'line-through';
    console.log("event in li");
    e.stopPropagation();
}))

ul.addEventListener("click", (e) => {
    console.log("event in ul");
})