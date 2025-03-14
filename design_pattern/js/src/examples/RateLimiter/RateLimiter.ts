export default function(callback : Function, limitArg: number) {
    let limit = limitArg;
    return (...args: any[]) => {
        if(limit == 0) {
            throw Error("Limit exceeded");
        }
        limit--;
        callback(...args);
    }
}