"use strict"

function Weather(cityName, description, main) {
    this.cityName = cityName;
    this.description = description;
    this.main = sunset;
    this._temperature = '';
    
    console.log(sunset);
}

Object.defineProperty(Weather.prototype, 'temperature', {
    get: function() {
        return this._temperature;
    },
    set: function(value) {
        this._temperature = (value * 1.8 + 32).toFixed(2) + 'F'
    }
    });