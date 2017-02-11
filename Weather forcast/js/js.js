"use strict";

var searchButton = document.querySelector('button');
var searchCity = document.querySelector('#city');

var loadingText = document.querySelector('.loading')
var weather = document.querySelector('#weather')

var weatherCity = document.querySelector('#weathercity');
var weatherDescription = weather.querySelector('#weatherdescription');
var weatherTemperature = weather.querySelector('#weathertemperature');
var Sunrise = weather.querySelector('#sunrise')


var list = weather.getElementsByTagName('span');

console.log(Sunrise);