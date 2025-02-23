import Req from "./Req";

export default interface Handler {
    setNext(handler: Handler): Handler;
    handle(request: Req): void;
}

