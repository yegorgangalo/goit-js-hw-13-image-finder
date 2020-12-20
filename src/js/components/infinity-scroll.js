export default class infScroll {
  constructor(callback, inputRef, selector='body') {
    this.Refs = this.getRefs(selector);
    this.ioCallback = this.addInnerCallback(callback, inputRef);
    this.isIntersecting = false;
  }

  addInnerCallback(callback, inputRef) {
    return (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (!this.isIntersecting) {
            this.isIntersecting = true;
            return;
          };
          if (!inputRef.value) {
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