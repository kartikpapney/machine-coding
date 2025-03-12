import File from "./File";
import Folder from "./Folder"
import FileSystem from "./FileSystem";

export default () => {
    const fs : Folder = new Folder("movies");
    const hFs : Folder = new Folder("hollywood")
    hFs.add(new File("tenat.mp4"))
    hFs.add(new File("intestellar.mp4"))
    const bFs : Folder = new Folder("bollywood");
    bFs.add(new File("stree.mp4"))
    fs.add(hFs);
    fs.add(bFs);
    fs.showDetails();
}