import Iterator from "./Iterator";

export default interface Aggregator<T> {
    getIterator(s?: string): Iterator<T>;
}