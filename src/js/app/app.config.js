'use strict';

angular.module('tryModule')
    .config(
        function($locationProvider, $routeProvider){
            $locationProvider.html5Mode({enabled:true});
            $routeProvider
                .when("/", {
                    template: "<blog-list3></blog-list3>"
                })
                .when("/about", {
                    templateUrl: "/templates/about.html"
                })
                .when("/blog/:id", {
                    template: "<blog-detail></blog-detail>"
                })
                .when("/blog/:id/:abc", {
                    template: "<blog-list3></blog-list3>"
                })
                /*.when("/blog/1", {
                    template: "<h1>Hi</h1>"
                })
                .when("/blog/2", {
                    template : "<blog-list3></blog-list3>"
                })*/
                .otherwise({
                    template: "Not found."
                })
    });
