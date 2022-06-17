class InventoryRequesterV1 {
  constructor() {
    this.REQ_METHODS = ["HTTP"];
  }
  requestItem(item) { }
}

class InventoryRequesterV2 {
  constructor() {
    this.REQ_METHODS = ["GRAPHQL"];
  }
  requestItem(item) { }
}

class InventoryTracker {
  constructor(items, requester) {
    this.items = items;
    this.requester = requester;
  }
  requestItems() {
    this.items.forEach((item) => {
      this.requester.requestItem(item);
    });
  }
}
const inventoryTracker = new InventoryTracker(
  ["apples", "bananas"],
  new InventoryRequesterV2()
);
const inventoryTracker2 = new InventoryTracker(
  ["apples", "bananas"],
  new InventoryRequesterV1()
);
inventoryTracker.requestItems();
