//Вставить перед всеми скриптами
export default function() {
	var proto = HTMLElement.prototype,
		addEventListener = proto.addEventListener,
		removeEventListener = proto.removeEventListener;

	proto.addEventListener = function(type, callback, useCapture) {
		if(!this._listeners) {
			this._listeners = {};
		}
		if(!(type in this._listeners)) {
			this._listeners[type] = [];
		}

		if(this._listeners[type].indexOf(callback) === -1) {
			this._listeners[type].push(callback);
		}

		addEventListener.call(this, type, callback, useCapture);
	};

	proto.removeEventListener = function(type, callback, useCapture) {
		var index = this._listeners && type in this._listeners ? this._listeners[type].indexOf(callback) : -1;

		if(index !== -1) {
			this._listeners[type].splice(index, 1);
		}

		removeEventListener.call(this, type, callback, useCapture);
	};

	proto.hasEventListener = function(type) {
		return !!(this._listeners && type in this._listeners && this._listeners[type].length || typeof this['on' + type] === 'function');
	};
}

// var hasClick = myElem.hasEventListener('click');
// var hasDblclick = myElem.hasEventListener('dblclick');
// var hasMouseDown = myElem.hasEventListener('mousedown');
