'use strict';

angular.module('tryNav')
    .directive('tryNav', function(Post, $location){
        return {
            restrict: "E",
            templateUrl: "/js/app/utils/try-nav/try-nav.html",
            link: function(scope, element, attr){
                scope.items = Post.query(); 
                scope.selectItem = function($item, $model, $label){
                    console.log($item);
                    console.log($model);
                    console.log($label);
                    $location.path("/blog/"+$item.id);
                    scope.searchQuery = "";
                }
                scope.searchItem = function(){
                    console.log(scope.searchQuery);
                    $location.path("/blog/").search("q", scope.searchQuery);
                    scope.searchQuery = "";
                }
            }
        }
    });