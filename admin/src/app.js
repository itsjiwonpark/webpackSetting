import 'bootstrap';
import './scss/app.scss';
import $ from 'jquery'
import template  from 'handlebars-loader!./numberlist.hbs';

console.log('app.js loaded');

$(document).ready(() => {
  console.log('jquery works!')
})
let numbers = [1,2,3,4,5,6];
console.log(template({numbers}));