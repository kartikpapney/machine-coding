import BaseHandler from "./BaseHandler";
import Req from "./Req";

export default class Developer extends BaseHandler {
    handle(request: Req): void {
        if(request.getValue() == "low") {
            console.log("Developer is handling the request");
        } else {
            super.handle(request)
        }
    }
}