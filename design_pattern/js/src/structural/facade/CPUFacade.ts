import Processor from "./Processor";
import GraphicCard from "./GraphicCard";
import Ram from "./Ram";
import Storage from "./Storage";

export default class CPUFacade {
    private processor : Processor;
    private graphicCard : GraphicCard;
    private ram : Ram
    private storage : Storage;

    constructor() {
        this.processor = new Processor();
        this.graphicCard = new GraphicCard();
        this.ram = new Ram();
        this.storage = new Storage();
    }

    public build() : void {
        console.log("--- cpu build started ---");
        this.processor.install();
        this.graphicCard.install();
        this.ram.install();
        this.storage.install();
        console.log("--- cpu build ended ---");
    }
}