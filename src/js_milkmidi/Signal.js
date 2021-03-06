/*!
(c) 2014 milkmidi
Validate.js
2016 06 03
*/

class Signal {	
	constructor() {
		this.enabled = true;
		this._destroyed = false;
		/**
		 * @type {Slot[]}
		 */
		this._listeners = [];
	}
	/**
	 * @param  {function} listener 偵聽的函式
	 * @param  {any} context
	 * @return {Slot}
	 */
	add(listener, context) {
		this.validateListener(listener, 'add');
		/**
		 * @type {Slot}
		 */
		var slot = this._registerListener(listener, context, false);
		return slot;
	}
	/**
	 * @param  {function} listener
	 * @param  {any} context
	 * @return {Slot}
	 */
	addOnce(listener, context) {
		this.validateListener(listener, 'add');
		return this._registerListener(listener, context, true);
	}
	validateListener(listener, fnName) {
		if (typeof listener !== 'function') {
			throw new Error('Phaser.Signal: listener is a required param of {fn}() and should be a Function.'.replace('{fn}', fnName));
		}
	}	
	/**
	 * @param  {function} listener
	 * @param  {any} context
	 * @return {number}
	 */
	_indexOfListener(listener, context) {
		var n = this._listeners.length;
		var cur;
		while (n--) {
			cur = this._listeners[n];
			if (cur._listener === listener && cur._context === context) {
				return n;
			}
		}
		return -1;
	}
	/**
	 * @description tesetset
	 * @param  {function} listener - 偵聽的函式
	 * @param  {any} context - 
	 * @param  {boolean} isOnce - 
	 * @return {Slot}
	 */
	_registerListener(listener, context, isOnce) {
		var prevIndex = this._indexOfListener(listener, context);
		/**
		 * @type {Slot}
		 */
		var slot;
		if (prevIndex !== -1) {
			slot = this._listeners[prevIndex];			
			//if (binding.isOnce() !== isOnce)	            {
			//throw new Error('You cannot add' + (isOnce ? '' : 'Once') + '() then add' + (!isOnce ? '' : 'Once') + '() the same listener without removing the relationship first.');
			//}
		}
		else {
			slot = new Slot(this, listener, context , isOnce);
			this._listeners.push(slot);
		}
		return slot;
	}
	
	/**
	 * @param  {function} listener
	 * @param  {any} context
	 * @return {function}
	 */
	remove(listener, context) {
		this.validateListener(listener, 'remove');
		var i = this._indexOfListener(listener, context);
		if (i !== -1) {
			this._listeners[i]._destroy();
			this._listeners.splice(i, 1);
		}
		return listener;
	}
	removeAll() {
		var n = this._listeners.length;
		if (0 === n) {
			return;
		}
		for (var a in this._listeners) {
			this._listeners[a]._destroy();
		}
		this._listeners.length = 0;
	}
	dispatch() {
		if (!this.enabled) {
			return;
		}
		var n = this._listeners.length;
		var paramsArr = Array.prototype.slice.call(arguments);
		for (var a in this._listeners) {
			this._listeners[a].execute(paramsArr);
		}
	}
	destroy() {
		if (this._destroyed)
			return;
		this.removeAll();
		delete this._listeners;
		this._destroyed = true;
	}
	/**
	 * @return {number} This is the result
	 */
	get numListeners() {
		return this._listeners.length;
	}
	/**
	 * @return {boolean} This is the result
	 */
	get destroyed() {
		return this._destroyed;
	}
	/**
	 * @return {string}
	 */
	toString() {
		return '[Signal enabled:' + this.enabled + ' numListeners:' + this.numListeners + ']';
	}
}
class Slot {
	/**
	 * @param  {Signal} signal
	 * @param  {Function} listener
	 * @param  {object} context
	 * @param  {boolean} onece
	 */
	constructor(signal, listener, context, once) {
		this._signal = signal;
		this._listener = listener;
		this._context = context;
		this._once = once;
		this._destroyed = false;
	}
	execute() {
		if (this._destroyed)
			return;
		var paramsArr = Array.prototype.slice.call(arguments);
		this._listener.apply(context, paramsArr);
		if (this._once) {
			this.remove();
		}
	}
	remove() {
		if (this._destroyed)
			return;
		this._signal.remove(this._listener);		
	}
	_destroy() {
		delete this._signal;
		delete this._listener;
		delete this._context;
		this._destroyed = true;
	}
	get once() {
		return this._once;
	}
	toString(){
		return `[Slot destroyed:${this._destroyed}]`;
	}
}


// if (typeof module !== 'undefined' && module.exports) {
module.exports = Signal;
/*} else {
	window.milkmidi = window.milkmidi || {};
	window.milkmidi.Signal = Signal;
}*/
// })( window);