export default interface Iterator<T> {
    next(): void;
    hasNext(): boolean;
    current(): T | null;
    reset(): void;
}