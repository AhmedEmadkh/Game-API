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
  $(window).on("load", function () {
    ui.getData("mmorpg");
  });
  // ***************************************************************
  // Hiding games section on clicking
  games.hide();
  // details.hide();
});
