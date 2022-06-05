function makeAjaxCall(url) {
  // ajax request and return promise
}

function makeHttpCall(url) {
  // http request and return promise
}

class BaseAdapter {
  // some base class
}

class AjaxAdapter extends BaseAdapter {
  constructor() {
    super();
    this.name = "ajaxAdapter";
  }
}

class NodeAdapter extends BaseAdapter {
  constructor() {
    super();
    this.name = "nodeAdapter";
  }
}

class HttpRequester {
  constructor(adapter) {
    this.adapter = adapter;
  }

  fetch(url) {
    if (this.adapter.name === "ajaxAdapter") {
      return makeAjaxCall(url).then((response) => {
        // transform response and return
      });
    } else if (this.adapter.name === "nodeAdapter") {
      return makeHttpCall(url).then((response) => {
        // transform response and return
      });
    }
  }
}

new AjaxAdapter();
new NodeAdapter();
