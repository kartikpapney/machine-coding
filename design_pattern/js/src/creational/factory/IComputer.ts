import GraphicCard from "./IGraphicCard";
import Processor from "./IProcessor";

export default interface ILaptop {
    setGraphicCard(graphicCard: GraphicCard): ILaptop;
    setProcessor(processor: Processor): ILaptop;
    print(): void;
}
