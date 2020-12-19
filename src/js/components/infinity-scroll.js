export default class infScroll {
  constructor(callback, selector='body') {
    this.Refs = this.getRefs(selector);
    this.ioCallback = this.addInnerCallback(callback);
    this.isIntersecting = false;
  }

  addInnerCallback(callback) {
    return (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (!this.isIntersecting) {
            this.isIntersecting = true;
            return;
          };
          callback();
        };
      });
    };
  }

  getRefs(selector) {
    const Refs = {};
    Refs.node = document.querySelector(selector);
    Refs.target = document.createElement('div');
    Refs.node.append(Refs.target);
    return Refs;
  }
};