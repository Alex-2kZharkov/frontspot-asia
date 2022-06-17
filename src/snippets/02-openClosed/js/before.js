class BaseAdapter {
    // some base class
}

class AjaxAdapter extends BaseAdapter {
    constructor() {
        super();
        this.name = "ajaxAdapter";
    }

    makeAjaxCall(url) {
        // ajax request and return promise
    }
}

class NodeAdapter extends BaseAdapter {
    constructor() {
        super();
        this.name = "nodeAdapter";
    }

    makeHttpCall(url) {
        // http request and return promise
    }
}

class HttpRequester {
    constructor(adapter) {
        this.adapter = adapter;
    }

    fetch(url) {
        if (this.adapter.name === "ajaxAdapter") {
            return this.adapter.makeAjaxCall(url);
        } else if (this.adapter.name === "nodeAdapter") {
            return this.adapter.makeHttpCall(url);
        }
    }
}

new AjaxAdapter();
new NodeAdapter();
