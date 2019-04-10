/*!
(c) 2014 milkmidi
CityArea.js
*/

var EventDispatcher = require('./EventDispatcher');
var CITY_AREA_DATA = require('./CityAreaData');

class CityArea extends EventDispatcher{
    constructor( jCity, jArea, jZip ){
        super();			
        
        this.jCity = jCity;
        this.jArea = jArea;
        this.jZip = jZip;
        this.jZip.html('');
        // this.jStreet = jStreet = $( "#" + streetId );
        // this._cityLoaded = false;
        // this._areaLoaded = false;
        // this._isStreetSelect = true;          
        // this.optionExtra = "";
        
        this.jCity.empty();
        this.jCity.append( "<option value='-1'>縣/市</option>" );

        var CITIES_ARR = CITY_AREA_DATA;
        var optionStr = "";

        /** @type {HTMLSelectElement} */       
        // var domCity = this.jCity.get(0);
        for ( var i = 0; i < CITIES_ARR.length; i++ ) {
            optionStr += "<option value='" + i + "' " + '' + " >" + CITIES_ARR[i].label + "</option>";

            /** 
             * type {HTMLOptionElement} 
             * */
            /*var optionChild = document.createElement('option');
            optionChild.innerHTML = CITIES_ARR[i].label;
            optionChild.setAttribute('value', i);
            domCity.appendChild(optionChild);*/
        }  
        // domCity.addEventListener('change', (e) => {
            // console.log( e );
            // console.log( domCity.options.selectedIndex );
        // });
      
        // domCity.appendChild()
        this.jCity.append( optionStr );

        // this._cityLoaded = true;
        // this._setCity();

        this.jArea.empty();
        this.jArea.append( "<option value='0'>區</option>" );

        /*if ( this.jStreet.length == 0 ) {
            this._isStreetSelect = false;
        } else {
            this.jStreet.empty();
            this.jStreet.append( "<option disabled value='0'>請選擇</option>" );
        }

        */

        this.jCity.change( this.cityChangeHandler.bind(this) );
        this.jArea.change( this.areaChangeHandler.bind(this) );            
    }

    clearAreaAndStreet() {
        this.jArea.empty();
        this.jArea.removeClass('error');
        this.jZip.removeClass('error');
        // this.jArea.append( "<option disabled value='0'>區</option>" );
        // this.jStreet.empty();
        // this.jStreet.append( "<option disabled value='0'>請選擇</option>" );
    }

    cityChangeHandler(e){
        this.clearAreaAndStreet();
        this.jCity.children().eq(0).remove();
        var index = this.jCity.val();
        if ( index == -1 ) {
            return;
        }
        var areaArr = CITY_AREA_DATA[index].area;
        for ( var i = 0; i < areaArr.length; i++ ) {
            var name = areaArr[i].label;
            var zip = areaArr[i].zip;
            this.jArea.append( "<option value='" + zip + "'>" + name + "</option>" );

            if (i===0) {
                this.jZip.html( zip );
            }
        }
        // log( "City Change() index:" + index );
        // self._setArea();

        // self.dispatch( CityArea.CITY_CHANGE, self.getCity() );
    }
    areaChangeHandler(e){
        /*if ( !self._isStreetSelect ) {
            return;
        }*/
        // self.jStreet.empty();
        this.jZip.removeClass('error');
        var zip = this.jArea.find(":selected").attr('value');
        this.jZip.html( zip );          
        // self.dispatch( CityArea.AREA_CHANGE, self.getArea() );
    }

    get city(){
        var c = this.jCity.find(":selected").text();
        return c == '縣/市' ? '' : c;
    }
    get area(){
        var a = this.jArea.find(":selected").text();
        return a == '區' ? '' : a;
    }
    get zip(){
        return this.jZip.html();
    }
}

module.exports = CityArea;
