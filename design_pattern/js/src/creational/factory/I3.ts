import IProcessor from "./IProcessor";

export default class I3 implements IProcessor {
    private name : String;
    private frequency : String;
    public constructor() {
        this.name = "Intel I3";
        this.frequency = "3.5 Ghz"
    }
    public getFrequency(): String {
        return this.frequency;
    }
    public getName(): String {
        return this.name;
    }
}