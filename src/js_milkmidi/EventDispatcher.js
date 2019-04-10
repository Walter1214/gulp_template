/*!
(c) 2014 milkmidi
EventDispatcher.js freely distributable under the MIT license.
update:2016 05 26
*/
/**
 * @param  {Array} array
 * @param  {*} searchElement
 * @return {number}
 */
function getElementIndex( array, searchElemen ) {
    for ( var i = 0, l = array.length; i < l; i++ ) {
        if ( searchElement === array[i] ) {
            return i;
        }
    }
    return -1;
}
class EventDispatcher {
    constructor() {
        this._listenerObj = {};
        this._destroy = false;
        this.enabled = true;
    }
    
    /**
     * @param  {string} eventName
     * @param  {function} listener
     */
    on( eventName  , listener ) {
        var arr = this._listenerObj[eventName] || [];
        var n = getElementIndex( arr, listener );
        if ( n == -1 ) {
            arr.push( listener );
        }
        this._listenerObj[eventName] = arr;
    }
    /**
     * @param  {string} eventName
     * @param  {function} listener
     */
    off( eventName , listener ) {
        var arr = this._listenerObj[eventName] || [];
        var n = getElementIndex( arr, listener );
        if ( n != -1 ) {
            arr.splice( n, 1 );
        }
        this._listenerObj[eventName] = arr;
    }
    /**
     * @param  {string} eventName
     * @param  {*} value
     */
    dispatch( eventName, value ) {
        if ( !this.enabled || !this._listenerObj[eventName] ) {
            return;
        }
        var arr = this._listenerObj[eventName];
        var length = arr.length;
        for ( var i = 0; i < length; i++ ) {
            arr[i].call( this, value );
        }
    }
    destroy() {
        if ( this._destroy ) {
            return;
        }
        this._destroy = true;
        for ( var a in this._listenerObj ) {
            this._listenerObj[a].length = 0;
        }
        this._listenerObj = null;
    }
    toString() /*String*/ {
        return "[EventDispatcher]";
    }
}

// if (typeof module !== 'undefined' && module.exports) {
module.exports = EventDispatcher;
    /*} else {
        window.milkmidi = window.milkmidi || {};
        window.milkmidi.EventDispatcher = EventDispatcher;        
    }*/
// })( window );