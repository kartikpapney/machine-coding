import BaseHandler from "./BaseHandler";
import Req from "./Req";

export default class DefaultHandler extends BaseHandler {
    handle(request: Req): void {
        if(request.getValue() == "unknown") {
            console.log("DefaultHandler is handling the request");
        } else {
            super.handle(request)
        }
    }
}