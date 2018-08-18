import 'bootstrap';
import './scss/app.scss';
import $ from 'jquery'

console.log('app.js loaded');

$(document).ready(() => {
  console.log('jquery works!')

  $(document).on('click', '.signin-btn', loginHandler);
  
})

loginHandler = () => {
  console.log('hi!')
};