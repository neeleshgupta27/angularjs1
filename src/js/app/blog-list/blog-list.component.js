'use strict';

angular.module('blogList')
        .controller('blogListController', function($scope){
            console.log("hello from controller");

            var blogItems = [
                {id:1, title:"title1", description: "title 1 description"},
                {id:2, title:"title2", description: "title 2 description"},
                {id:3, title:"title3", description: "title 3 description"}
            ];

            $scope.items = blogItems;

            $scope.title = "Hi, blog-list";
            $scope.clicks = 0;
            $scope.someClickTest = function(){
                console.log("button clicked.");
                $scope.clicks +=1;
                $scope.title = "Clicked" + $scope.clicks;
                
            }
        });

angular.module('blogList')
        .component('blogList2', {
            template: "<div> <h2>{{title}}</h2> <button ng-click='someClickTest()'>Click Me</button></div>",
            controller: function($scope){
                console.log("hello from blog-list2");
                $scope.title = "Hi, blog-list2";
                $scope.clicks = 0;
                $scope.someClickTest = function(){
                    console.log("button clicked.");
                    $scope.clicks +=1;
                    $scope.title = "Clicked" + $scope.clicks;
                    
                }
            }
        });

angular.module('blogList')
        .component('blogList3', {
            templateUrl: '/js/app/blog-list/blog-list.html',
            controller: function(Post, $routeParams, $scope, $rootScope, $location){
                //console.log("hello from blog-list3");
                //console.log("$routeParams:");
                //console.log($routeParams.id);
                /*
                // Using array
                var blogItems = [
                    {id:1, title:"title1", description: "title 1 description"},
                    {id:2, title:"title2", description: "title 2 description"},
                    {id:3, title:"title3", description: "title 3 description"}
                ];
    
                $scope.items = blogItems;

                $scope.title = "Hi, blog-list2";
                $scope.clicks = 0;
                $scope.someClickTest = function(){
                    console.log("button clicked.");
                    $scope.clicks +=1;
                    $scope.title = "Clicked" + $scope.clicks;
                    
                }
                */

                // Using $resource by creating own Post service:
                $scope.items = Post.query();
                console.log(Post.query());
            
                // using ng-click 
                $scope.goToItem = function(post){
                    console.log("goToItem function calling.");
                    
                    //use location.path with $rootScope when event progatation not set (this is set under confirm-click directive)
                    //$location.path("/blog/"+ post.id);

                    //use location.path with $rootScope when event progatation set
                    $rootScope.$apply(function(){
                        $location.path("/blog/"+ post.id);
                    })
                }


            }
        });

        
