class InventoryRequester {
  constructor() {
    this.REQ_METHODS = ["HTTP"];
  }
  requestItem(item) {
    // ...
  }
}
class InventoryTracker {
  constructor(items) {
    this.items = items;
    // BAD: We have created a dependency on a specific request implementation.
    // We should just have requestItems depend on a request method: `request`
    this.requester = new InventoryRequester();
  }
  requestItems() {
    this.items.forEach((item) => {
      this.requester.requestItem(item);
    });
  }
}
new InventoryTracker(["apples", "bananas"]).requestItems();
