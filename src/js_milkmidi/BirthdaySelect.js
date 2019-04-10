/*!
(c) 2014 milkmidi
BirthdaySelect.js
*/
import EventDispatcher from './EventDispatcher';
import CITY_AREA_DATA from './CityAreaData';

// (function ( window ){    

var DateUtil = {
    /**
     * @param  {number} startYear
     * @param  {number} count
     * @return {number[]}
     */
    getYear: function ( startYear, count ) {
        count = count || 100;
        var arr = [];
        for ( var i = startYear; i > startYear - count; i-- ) {
            arr.push( i );
        }
        return arr;
    },
    /**
     * @return {number[]}
     */
    getMonth: function () {
        var arr = [];
        for ( var i = 1; i <= 12; i++ ) {
            arr.push( i );
        }
        return arr;
    },
    /**
     * @param  {number} year
     * @param  {number} month
     */
    getDay: function ( year, month ) {
        var _len = this.getDaysOfMonth( year, month );
        var arr = [];
        for ( var i = 1; i <= _len; i++ ) {
            arr.push( i );
        }
        return arr;
    },
    getDaysOfMonth: function ( year, month )/*int*/ {
        switch ( month ) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                return 31;
            case 4:
            case 6:
            case 9:
            case 11:
                return 30;
            case 2:
                return this.isLeapYear(year) ? 29 : 28;
            default:
                return 0;
        }
    },
    isLeapYear: function ( year ) {
        return ( year % 4 === 0 && year % 100 !== 0 || year % 400 === 0 );
    }
}

class BirthdaySelect extends EventDispatcher {
    constructor( jYear, jMonth, jDate ) {
        super();

        this.jYear = jYear;
        this.jMonth = jMonth;
        this.jDate = jDate;
        this.currentDateLength = -1;

        var year = DateUtil.getYear( new Date().getFullYear(), 100 );
        var str = "";
        for ( var i = 0; i < year.length; i++ ) {
            str += "<option value='" + i + "' " + " >" + year[i] + "</option>";
            //this.jYear.append( "<option value='" + i + "' " + " >" + year[i] + "</option>" );
        }
        this.jYear.append( str );

        var month = DateUtil.getMonth();

        str = "";
        for ( var i = 0; i < month.length; i++ ) {
            str += "<option value='" + i + "' " + " >" + month[i] + "</option>";
            //this.jMonth.append( "<option value='" + i + "' " + " >" + month[i] + "</option>" );
        }
        this.jMonth.append( str );



        this.jYear.change( this.resetDate.bind( this ) );
        this.jMonth.change( this.resetDate.bind( this ) );
        this.jDate.change( this.resetDate.bind( this ) );

        /*$( "#" + yearID + ", #" + monthID + ", #" + dateID ).change( function () {
            resetDate();
            self.dispatch( DateSelect.CHANGE, self.getFullDate() );
        } );*/


        var resetDate = function () {

        }
        resetDate();
    }

    resetDate( e ) {
        this.jYear.removeClass( 'error' );
        this.jDate.removeClass( 'error' );
        this.jMonth.removeClass( 'error' );
        var date = DateUtil.getDay( this.year / 1, this.month / 1 );
        if ( this.currentDateLength == date.length ) {
            return;
        }
        this.currentDateLength = date.length;
        this.jDate.empty();
        var str = "";
        for ( var i = 0; i < date.length; i++ ) {
            str += "<option value='" + i + "' " + " >" + date[i] + "</option>";
        }
        this.jDate.append( str );
    }

    /** @type {string} */
    get year() {
        var y = this.jYear.find( ':selected' ).text();
        return isNaN( y ) ? "" : y;
    }
    /** @type {string} */
    get month() {
        var y = this.jMonth.find( ':selected' ).text();
        return isNaN( y ) ? "" : y;
    }
    /** @type {string} */
    get date() {
        var y = this.jDate.find( ':selected' ).text();
        return isNaN( y ) ? "" : y;
    }
    /** @type {string} */
    get data() {
        return this.year + "/" + this.month + "/" + this.date;
    }
}

if ( typeof module !== 'undefined' && module.exports ) {
    module.exports = BirthdaySelect;
} else {
    window.milkmidi = window.milkmidi || {};
    window.milkmidi.BirthdaySelect = BirthdaySelect;
}
// })( window);