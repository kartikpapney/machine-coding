import Developer from "./Developer";
import Manager from "./Manager";
import Founder from "./Founder";
import Req from "./Req";
import DefaultHandler from "./Default";

export default () => {
    console.log("--- started ---")

    const developer = new Developer();
    const manager = new Manager();
    const founder = new Founder();
    const defaultHandler = new DefaultHandler();

    developer.setNext(manager).setNext(founder).setNext(defaultHandler);

    developer.handle(new Req("low"))
    developer.handle(new Req("medium"))
    developer.handle(new Req("high"))
    developer.handle(new Req("unknown"))

    console.log("--- ended ---")
}