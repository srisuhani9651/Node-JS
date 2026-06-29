const { Buffer } = require("buffer")

// const buf = Buffer.alloc(4)
// console.log(buf[1]);

// const buf = Buffer.from("Hello Everyone")
// console.log(buf); //output: <Buffer 48 65 6c 6c 6f 20 45 76 65 72 79 6f 6e 65>
// console.log(buf.toString()); // output: Hello Everyone

// const buftwo = Buffer.allocUnsafe(10) // it is unsafe because you might have some garbage memory
// console.log(buftwo);  //output : <Buffer 00 00 00 00 00 00 00 00 00 00>

const buf = Buffer.alloc(10)
buf.write('Hello')
console.log(buf.toString());
