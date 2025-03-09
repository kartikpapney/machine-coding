import IGraphicCard from "./IGraphicCard";

export default class RTX4060 implements IGraphicCard {
    private name : String;
    private VRAM : String;
    public constructor() {
        this.name = "NVidia RTX 4060";
        this.VRAM = "8GB"
    }
    public getVRam() : String {
        return this.VRAM;
    }
    public getName(): String {
        return this.name;
    }
}