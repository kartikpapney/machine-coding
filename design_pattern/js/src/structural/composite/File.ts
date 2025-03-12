import FileSystem from "./FileSystem";

export default class File implements FileSystem {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    showDetails(indent: string = ""): void {
        console.log(`${indent}- ${this.name}`);
    }
}
