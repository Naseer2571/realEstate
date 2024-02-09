angular.module("myApp"). 
      config(["$routeProvider", function config($routeProvider){
        $routeProvider.
           when("/",{
            template:"<maincomponent></maincomponent>"
           }).
           when("/home",{
            template:"<maincomponent></maincomponent>"
           }).
           when("/about",{
            template:"<aboutsection></aboutsection>"
           }).
           when("/login",{
            template:"<loginsection></loginsection>"
           }).when("/home/:id",{
            template:"<properties></properties>"
           })
           
           
      }])