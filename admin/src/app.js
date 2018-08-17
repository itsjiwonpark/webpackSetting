import 'bootstrap';
import './scss/app.scss';
import $ from 'jquery'
import template  from 'numberlist.hbs';

console.log('app.js loaded');

$(document).ready(() => {
  console.log('jquery works!')

  $(document).on('click', '.signin-btn', loginHandler);
})
let numbers = [1,2,3,4,5,6];
console.log(template({numbers}));

loginHandler = () => {
  console.log('hi!')
};