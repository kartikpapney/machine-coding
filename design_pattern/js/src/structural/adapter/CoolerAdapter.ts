import Cooler from "./Cooler"
import NewCPU from "./NewCPU";

export default class CoolerAdapter extends Cooler {
    private cpu : NewCPU;

    constructor(cpu : NewCPU) {
        super();
        this.cpu = cpu;
    }

    mountCooler() : void {
        console.log("attaching mounting bracket for new cooler");
        this.cpu.attachNewMountingBracket();
    }

}   