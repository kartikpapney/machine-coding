import EventEmitter from "./EventEmitter";

export default () => {
    const greetV1 = (name: string) => console.log(`Hello, ${name}!`);
    const greetV2 = (name: string) => console.log(`Hey, ${name}!`);
    const emitter = new EventEmitter();

    emitter.on("greet", greetV1);
    emitter.on("greet", greetV2);
    /**
        Hello, Alice!
        Hey, Alice!
    */
    emitter.emit("greet", "Alice");
};
