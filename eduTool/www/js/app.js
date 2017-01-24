
define(['ionic','asyncLoader','ngcordova','hammer','imgDirective','imgService'],function (ionic,asyncLoader) {
  var app = angular.module('app', ['ui.router', 'ionic', 'ngCordova','ng-img','starter.imgservices']);
  asyncLoader.configure(app);
  return app;
});
