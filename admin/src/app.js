import 'bootstrap';
import './scss/app.scss';
import $ from 'jquery'
import template  from 'numberlist.hbs';

console.log('app.js loaded');

$(document).ready(() => {
  console.log('jquery works!')

  let source = template.html();
  let template = Handlebars
})
let numbers = [1,2,3,4,5,6];
console.log(template({numbers}));

function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the link that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}