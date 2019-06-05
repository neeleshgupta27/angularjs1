'use strict';

angular.module('blogDetail')
        .component('blogDetail', {
            templateUrl: '/js/app/blog-detail/blog-detail.html',
            controller: function(Post, $http, $location, $routeParams, $scope){

                console.log($routeParams.id);
                
                
                /*
                // using array:
                var blogItems = [
                    {id:1, title:"title1", description: "title 1 description"},
                    {id:2, title:"title2", description: "title 2 description"},
                    {id:3, title:"title3", description: "title 3 description"}
                ];
                $scope.title = "Blog: "+ $routeParams.id;
                $scope.notFound = true;
                angular.forEach(blogItems, function(post){
                    if(post.id == $routeParams.id){
                        $scope.post = post;
                        $scope.notFound = false;
                    }
                    console.log(post);
                });
                */

               
               /*
               // Using $http call:
               $http.get("/json/posts.json").then(successCallback, errorCallback);

                function successCallback(response, status, config, statusText){
                    $scope.notFound = true;
                    //console.log("success callback.");
                    //console.log(response.data);
                    var blogItems = response.data;
                    $scope.posts = blogItems;
                    angular.forEach(blogItems, function(post){
                        if(post.id == $routeParams.id){
                            $scope.post = post;
                            $scope.notFound = false;
                        }
                        console.log(post);
                    });
                }

                function errorCallback(response, status, config, statusText){
                    $scope.notFound = true; 
                    console.log("error callback");
                    console.log(response);
                }
                */

                // Using $resource by using own Post service:
                console.log(Post.query());
                console.log(Post.get());

                Post.query(function(data){
                    $scope.notFound = true;
                    angular.forEach(data, function(post){
                        if(post.id == $routeParams.id){
                            $scope.post = post;
                            $scope.notFound = false;
                            resetReply();
                        }
                        console.log(post);
                    });
                });

                $scope.deleteComment = function(comment){
                    $scope.$apply($scope.post.comments.splice(comment, 1));
                    
                    
                }

                $scope.addReply = function(){
                    console.log($scope.reply);
                    $scope.post.comments.push($scope.reply);
                    resetReply();
                }

                function resetReply(){
                    $scope.reply = {
                        "id": $scope.post.comments.length +1,
                        "text": ""
                    }
                }


                if($scope.notFound){
                    // change location
                    console.log("not found.");
                    $location.path("/404");
                }
        }});
    

        
