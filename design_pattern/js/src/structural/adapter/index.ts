import Cooler from "./Cooler"
import CoolerAdapter from "./CoolerAdapter";
import NewCPU from "./NewCPU";

export default () => {
    const oldCooler = new Cooler();
    oldCooler.mountCooler();

    const newCpu = new NewCPU();
    const adaptedCooler = new CoolerAdapter(newCpu);
    adaptedCooler.mountCooler();

}