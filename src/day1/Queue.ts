interface Node<T> {
    value: T;
    next?: Node<T>;
}

export default class Queue<T> {
    private head?: Node<T>;
    private tail?: Node<T>;

    public length: number = 0;

    public enqueue(value: T): void {
        const node: Node<T> = { value };

        if (this.tail) {
            this.tail.next = node;
        }

        this.tail = node;

        if (!this.head) {
            this.head = node;
        }

        this.length++;
    }

    public deque(): T | undefined {
        if (!this.head) {
            return undefined;
        }

        const value = this.head.value;
        this.head = this.head.next;

        if (!this.head) {
            this.tail = undefined;
        }

        this.length--;

        return value;
    }

    public peek(): T | undefined {
        if (!this.head) {
            return undefined;
        }

        return this.head.value;
    }
}
