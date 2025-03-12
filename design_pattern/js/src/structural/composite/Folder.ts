import FileSystem from "./FileSystem";

export default class Folder implements FileSystem {
    private name: string;
    private childrens: FileSystem[];

    constructor(name: string) {
        this.name = name;
        this.childrens = [];
    }

    add(fileSystem: FileSystem) {
        this.childrens.push(fileSystem);
    }

    showDetails(indent: string = ""): void {
        console.log(`${indent}- ${this.name}`);
        this.childrens.forEach((fileSystem: FileSystem) => {
            fileSystem.showDetails(`${indent}-`);
        })
    }
}
