var servicemodule = angular.module("myServiceMethod",[])
servicemodule.service("myServiceMethod", function($http){
    var self = this 
    self.getdata =function(city){
        console.log(city)
       return $http.get(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=cf2a38f78d6f66762451fedfc3c56ec9`). 
        then(function(response){
            //console.log(response.data)
            return response.data
        })

    }
    }

)
        