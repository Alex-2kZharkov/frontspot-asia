class BaseAdapter {
  // some base class
}

class AjaxAdapter extends BaseAdapter {
  constructor() {
    super();
    this.name = "ajaxAdapter";
  }

  request(url) {
    // Ajax specific implementation
  }
}

class NodeAdapter extends BaseAdapter {
  constructor() {
    super();
    this.name = "nodeAdapter";
  }

  request(url) {
    // Node specific implementation
  }
}

class HttpRequester {
  constructor(adapter) {
    this.adapter = adapter;
  }

  fetch(url) {
    return this.adapter.request(url).then((response) => {
      // transform response and return
    });
  }
}

new AjaxAdapter();
new NodeAdapter();
