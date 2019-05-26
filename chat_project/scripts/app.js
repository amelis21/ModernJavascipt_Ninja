// dom queries
const chatList = document.querySelector('.chat-list');
const newChatForm = document.querySelector('.new-chat');
const newNameForm = document.querySelector('.new-name');
const updateMsg = document.querySelector('.update-msg');
const rooms = document.querySelector('.chat-rooms');

// add a new chat
newChatForm.addEventListener('submit', e => {
    e.preventDefault();
    const message = newChatForm.message.value.trim();
    chatroom.addChat(message)
        .then(() => {
            newChatForm.reset()
        })   
        .catch(err => console.log(err));
})

newNameForm.addEventListener('submit', e => {
    e.preventDefault();
    // update name via chatroom
    const newName = newNameForm.name.value.trim();
    chatroom.updateName(newName);
    // reset the form
    newNameForm.reset();
    // show then hide the update message
    updateMsg.innerText = `Your name was updated to ${newName}`;
    setTimeout(() => updateMsg.innerText = '', 3000);
});

rooms.addEventListener('click', e => {
    if (e.target.tagName === 'BUTTON'){
        chatUI.clear();
        chatroom.updateRoom(e.target.getAttribute('id'));
        chatroom.getChats(chat => chatUI.render(chat));
    }
})

const username = localStorage.username ? localStorage.username : 'anon';
// class instances
const chatUI = new ChatUI(chatList);
// get chats and render
const chatroom = new Chatroom('general', username);
// console.log(chatroom);
// chatroom.addChat('hello everyone')
//     .then(() => console.log('chat added'))
//     .catch(err => console.log(err));
chatroom.getChats( data => {
    chatUI.render(data);
})


