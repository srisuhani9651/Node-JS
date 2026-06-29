const EventEmitter = require("events");

class ChatRoom extends EventEmitter{
    constructor(){
        super()
        this.users = new Set();
    }
//functionality for joining the chat room
    join(user){
        this.users.add(user)
        this.emit('join', user)
    }
// functionality for sending the message
    sendMessage(user, message){
        if(this.users.has(user)){ // here checking that he is the part of active user (has method) 
            this.emit('message', user, message)
        }else{
            console.log(`${user} is not in chat`);
            
        }
    }
// functionality for leaving the chatroom
    leave(user){
        if(this.users.has(user)){
            this.users.delete(user)
            this.emit('leave', user)
        }else{
            console.log(`${user} is not in the chat`);
            
        }
    }
}

module.exports = ChatRoom