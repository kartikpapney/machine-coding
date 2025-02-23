import BaseHandler from "./BaseHandler";
import Req from "./Req";

export default class Founder extends BaseHandler {
    handle(request: Req): void {
        if(request.getValue() == "high") {
            console.log("Founder is handling the request");
        } else {
            super.handle(request)
        }
    }
}