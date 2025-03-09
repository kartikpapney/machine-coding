import IProcessor from "./IProcessor";

export default class I9 implements IProcessor {
    private name : String;
    private frequency : String;
    public constructor() {
        this.name = "Intel I9";
        this.frequency = "4.5 Ghz"
    }
    public getFrequency(): String {
        return this.frequency;
    }
    public getName(): String {
        return this.name;
    }
}