export default class Req {
    private value: string | null = null;
    constructor(value: string) {
        this.value = value;
    }
    public getValue() : string | null{
        return this.value;
    }
}