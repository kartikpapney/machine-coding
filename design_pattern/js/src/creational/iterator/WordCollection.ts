import Aggregator from "./Aggregator"
import Iterator from "./Iterator";
import AlphabeticOrderIterator from "./AlphabeticOrderIterator";
import OrderIterator from "./OrderIterator";

export default class WordCollection implements Aggregator<string> {
    private items: string[] = [];

    public constructor(items: string[] = []) {
        this.items = items;
    }

    public getItems(): string[] {
        return this.items;
    }

    public getCount(): number {
        return this.items.length;
    }

    public addItem(item: string): void {
        this.items.push(item);
    }

    public getIterator(type?: string): Iterator<string> {
        if(type === 'alphabetic') {
            return new AlphabeticOrderIterator(this);
        }
        return new OrderIterator(this);
    }

    public getReverseIterator(type: string): Iterator<string> {
        if(type === 'alphabetic') {
            return new AlphabeticOrderIterator(this, true);
        }
        return new OrderIterator(this, true);
    }
}