module.exports = class Page {
    constructor(prev, next, total, data) {
        this.prev = prev;
        this.next = next;
        this.total = total;
        this.data = data;
    }
}