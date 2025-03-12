import BaseHandler from "./BaseHandler";
import Req from "./Req";
export default class Manager extends BaseHandler {
    handle(request: Req): void {
        if(request.getValue() == "medium") {
            console.log("Manager is handling the request");
        } else {
            super.handle(request)
        }
    }
}