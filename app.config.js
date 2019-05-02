"use strict";
angular
  .module("MySite")
  // Configuring the routing
  // The config method must have an array as the parameter. The array contains two elements, $routeProvider (as a string) and an arrow function with $routeProvider as a parameter
  .config(["$routeProvider", ($routeProvider) => {
    $routeProvider
      // When the user visits the display route...
      .when("/about-us", {
        // Load the about-us component
        template: "<about-us></about-us>"
      })
      .when("/home", {
        // Load the home component
        template: "<home></home>"
      })
      .when("/contact-us", {
        // Load the contact-us component
        template: "<contact-us></contact-us>"
      })
      .when("/sign-up", {
        // Load the sign-up component
        template: "<sign-up></sign-up>"
      })

      .when("/orders", {
        // Load the orders component
        template: "<orders></orders>"
      })
      .when("/shipments", {
        // Load the shipments component
        template: "<shipments></shipments>"
      })
      .when("/dispatches", {
        // Load the dispatches component
        template: "<dispatches></dispatches>"
      })
      .when("/inbounds", {
        // Load the inbounds component
        template: "<inbounds></inbounds>"
      })
      .when("/outbounds", {
        // Load the outbounds component
        template: "<outbounds></outbounds>"
      })
      .when("/warehouses", {
        // Load the warehouses component
        template: "<warehouses></warehouses>"
      })
      .when("/analytics", {
        // Load the analytics component
        template: "<analytics></analytics>"
      })
      .when("/locations", {
        // Load the locations component
        template: "<locations></locations>"
      })
      .when("/carriers", {
        // Load the carriers component
        template: "<carriers></carriers>"
      })
      .when("/employees", {
        // Load the employees component
        template: "<employees></employees>"
      })
      .when("/equipment", {
        // Load the equipment component
        template: "<equipment></equipment>"
      })
      .when("/accountspay", {
        // Load the accountspay component
        template: "<accountspay></accountspay>"
      })
      .when("/accountsrec", {
        // Load the accountsrec component
        template: "<accountsrec></accountsrec>"
      })

    
      

      .otherwise( {
        // Otherwise, go home component
        redirectTo: "/home"
      })
}]);