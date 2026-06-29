const EventEmitter = require("events")

const eventEmitter = new EventEmitter()

eventEmitter.on("greet", (username)=>{
    console.log(`Hello ${username} and Welcome to learn Even Emitter in Node JS!`);
    
})

eventEmitter.once("pushNotify", ()=>{
    console.log("This event will run only once!"); // this uses when any person joined and left so you wanna show only one messagex
    
})

eventEmitter.emit("greet", "Suhani")
eventEmitter.emit("greet", "Rohan")
eventEmitter.emit("pushNotify")
eventEmitter.emit("pushNotify")
eventEmitter.emit("greet", "Rohan")