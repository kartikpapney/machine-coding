import IGraphicCard from "./IGraphicCard";
import IComputer from "./IComputer";
import IProcessor from "./IProcessor";

export default class Laptop implements IComputer {
    private graphicCard ?: IGraphicCard | null;
    private processor ?: IProcessor | null;

    constructor() {
        this.graphicCard = null;
        this.processor = null;
    }

    public setGraphicCard(graphicCard : IGraphicCard) : this {
        this.graphicCard = graphicCard;
        return this;
    }

    public setProcessor(processor : IProcessor) : this {
        this.processor = processor;
        return this;
    }

    public print() : void {
        if([this.processor, this.graphicCard].includes(null)) {
            throw new Error("graphicCard & processor are mendatory field");
        }
        console.log(`GraphicCard = ${this.graphicCard?.getName()}, Processor = ${this.processor?.getName()}`)
    }
}