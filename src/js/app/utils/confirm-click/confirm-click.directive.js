'use strict';

angular.module('confirmClick')
    .directive('confirmClick', function($rootScope, $location){
        return{
            restrict: "A",
            link: function(scope, element, attr){
                //console.log("confirmClick.directive:");
                var msg = attr.confirmClick || "Are you sure?";
                var clickAction = attr.confirmedClick;
                element.bind("click", function(event){
                    
                    //Reason: to prevent any other sort of things that might be happening as a result of this actual click event.
                    event.stopImmediatePropagation();
                    event.preventDefault();
                    
                    if(window.confirm(msg)){
                        scope.$eval(clickAction);
                    }else{
                        console.log("cancelled.");
                    }
                })
            }
        }
    
    })

angular.module('confirmClick')
    .directive('confirmClickOld', function($rootScope, $location){
        return{
            scope: {
                message: '@message',
                eq: "=eq",
                post: "=post"
            },
            restrict: 'E', //E-element only, A-attribute only
            //template: '<a ng-href="/blog/{{post.id}}"> {{post.title}}</a>',
            template: '<a ng-href="#">confirm-click-old: {{post.title}}</a>',
            link: function(scope, element, attr){
                //console.log("confirmClick.directive:");
                /*
                //console.log(scope);
                //console.log(scope.message);
                console.log(scope.eq); // 1010
                //console.log(scope.post); // it will print all details
                // console.log(element);
                
                // attr: will always print value text only, it will not print value contents
                // console.log(attr);
                // console.log(attr.confirmClick);
                console.log(attr.post); //it will print "item"
                console.log(attr.eq); // 10 + 1000
                // console.log(attr.ngHref);
                */

                var msg = scope.message || "Are you sure?";
                element.bind("click", function(event){
                    if(window.confirm(msg)){
                        console.log("click: /blob/"+ scope.post.id);
                        
                        // this below sometime not work, so will use $rootScope.$apply to always work
                        //$location.path("/blob/"+ scope.post.id);

                        // this below method will allow to always run this function
                        $rootScope.$apply(function(){
                            $location.path("/blog/"+ scope.post.id);
                        })
                    }
                })

            }
        }
    });