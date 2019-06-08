'use strict';

angular.module('tryModule',[
        //external
        'angularUtils.directives.dirPagination',
        'ngResource',
        'ngRoute',
        'ui.bootstrap', // using this for type ahead

        //internal
        'blogList',
        'blogDetail',
        'confirmClick',
        'tryNav'
]);
        

//.config(function(){});

