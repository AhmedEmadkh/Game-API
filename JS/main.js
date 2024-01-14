"use strict";
/// <reference types="../@types/jquery" />
// ***************************************************************
import UI from "./UI.js";
import gamesClass from "./games.js";
import detailsClass from "./details.js";
const ui = new UI();
const games = new gamesClass();
const details = new detailsClass();

$(document).ready(function () {
  // JQUERY for adding active class to the links
  $(".nav-link").on("click", function () {
    $(".nav-link").removeClass("active");
    $(this).addClass("active");
  });

  // ***************************************************************
  // display the UI section
  let category;
  $(".nav-link").on("click", function (e) {
    category = $(e.target).text();
    ui.getData(category);
  });

  // Trigger the getData function with the default category on page load
  $(window).on("load", function () {
    // Set the default category (you can change this to any category you want)
    category = "mmorpg";
    
    // Call the getData function with the default category
    ui.getData(category);
  });

  // ***************************************************************
  // Hiding games section on clicking
  games.hide();
  // details.hide();
});

