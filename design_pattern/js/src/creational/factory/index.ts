import RTX4060 from "./RTX4060";
import Laptop from "./Laptop";
import I3 from "./I3";

export default () => {
    const laptop = new Laptop();
    laptop.setGraphicCard(new RTX4060()).setProcessor(new I3());
    laptop.print();
}