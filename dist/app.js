"use strict";
let cow;
cow = {
    name: "Bagha",
    color: "red",
    eatable: true,
    age: 5,
    info: () => { },
};
class Greet {
    constructor(n) {
        this.name = n;
    }
    greet() {
        console.log("This is implemented on greetable interfaces");
    }
}
const greet = new Greet("Hello there!");
greet.greet();
