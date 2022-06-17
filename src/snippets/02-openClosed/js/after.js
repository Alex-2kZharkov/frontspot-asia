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

class HttpRequester {
  constructor(adapter) {
    this.adapter = adapter;
  }

  fetch(url) {
    return this.adapter.request(url);
  }
}

new AjaxAdapter();
new NodeAdapter();
