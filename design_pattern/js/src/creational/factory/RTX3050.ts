import IGraphicCard from "./IGraphicCard";

export default class RTX3050 implements IGraphicCard {
    private name : String;
    private VRAM : String;
    public constructor() {
        this.name = "NVidia RTX 3050";
        this.VRAM = "6GB"
    }
    public getVRam() : String {
        return this.VRAM;
    }
    public getName(): String {
        return this.name;
    }
}