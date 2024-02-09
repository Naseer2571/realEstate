angular.module("myHeader")
       .component("myheader",{
        templateUrl:"./myHeader/myHeader.template.html",
        controller:function checksFun(){
            this.main="main"
        }
       })