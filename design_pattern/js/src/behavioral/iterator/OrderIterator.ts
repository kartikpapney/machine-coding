import Iterator from "./Iterator";
import WordCollection from "./WordCollection";

export default class OrderIterator implements Iterator<string> {
    private collection: string[] = [];
    private position: number = 0;
    private reverse: boolean = false;

    constructor(collection: WordCollection, reverse: boolean = false) {
        this.collection = collection.getItems().map((e) => e);
        this.reverse = reverse;
        if (reverse) {
            this.position = this.collection.length - 1;
        }
    }

    reset(): void {
        this.position = this.reverse ? this.collection.length - 1 : 0;
    }
    current(): string {
        return this.collection[this.position];
    }
    hasNext(): boolean {
        return this.reverse ? this.position > 0 : this.position < this.collection.length - 1;
    }
    next(): void {
        if(this.hasNext()) {
            this.position += this.reverse ? -1 : 1;
        }
    }
}