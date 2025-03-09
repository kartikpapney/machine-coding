import GraphicCard from "./IGraphicCard";
import Processor from "./IProcessor";

export default interface LaptopFactory {
    processor : Processor;
    graphicCard : GraphicCard;
}