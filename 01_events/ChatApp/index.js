const ChatRoom = require("./chatRoom.js")

const chat = new ChatRoom()


chat.on('join', (user) =>{
    console.log(`${user} has joined the chat`);
    
})


chat.on('message', (user, message) =>{
    console.log(`${user} has send a message ${message}`);
    
})


chat.on('leave', (user) =>{
    console.log(`${user} has left the chat`);
    
})

//simulating the chat

chat.join('Alice')
chat.join('Bob')

chat.sendMessage('Alice', 'Hello to everyone')

chat.leave('Alice')
chat.sendMessage('Alice', 'this message wont be sent')
chat.leave('Bob')