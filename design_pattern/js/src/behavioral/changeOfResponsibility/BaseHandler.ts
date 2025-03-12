import Handler from "./Handler";
import Req from "./Req";

export default abstract class BaseHandler implements Handler {
    private nextHandler: Handler | null = null;

    public setNext(handler: Handler): Handler {
        this.nextHandler = handler;
        return handler;
    }

    public handle(request: Req): void {
        if (this.nextHandler) {
            this.nextHandler.handle(request);
        }
    }
}