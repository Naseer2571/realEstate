angular.module("properties").
             component("properties",{
                templateUrl:"properties/properties.template.html",
                controller:["$routeParams","myServiceMethod" ,function($routeParams,myServiceMethod){
                    this.myArray = [{id:1,city:"hyderabad",flat:"3bhk",price:"12,00,000",imageUrl:"https://media.istockphoto.com/id/479767334/photo/large-perfect-maintenance-free-home-with-covered-porch.webp?b=1&s=170667a&w=0&k=20&c=H8F_5xaCznj4I2OTwQSovXd72Qmf9sW2gytIttuPXlc="},
                    {id:2,city:"chennai",flat:"2bhk",price:"9,00,000",imageUrl:"https://media.istockphoto.com/id/588954624/photo/neat-beige-home-with-two-garage-spaces.webp?b=1&s=170667a&w=0&k=20&c=_EyY4skHBKC_wZh-LEv5Z3DcfmFd6EdKMwz2DiXeHb4="},
                    {id:3,city:"bangalore",flat:"4bhk",price:"14,00,000",imageUrl:"https://media.istockphoto.com/id/1223059837/photo/cityscape-of-a-modern-residential-area-with-apartment-buildings-new-green-urban-landscape-in.webp?b=1&s=170667a&w=0&k=20&c=Tkl4Uj4qox255ArlqJsvgfCXEQwCVPMnMrh4_sWdp3c="},

                    {id:4,city:"delhi",flat:"3bhk",price:"11,00,000",imageUrl:"https://media.istockphoto.com/id/1488438637/photo/row-of-homes.webp?b=1&s=170667a&w=0&k=20&c=sIeoQWcaaZtmXr90VeBGEh8hnqiBS_ySuC8-JcoRpBE="},
                    {id:5,city:"mumbai",flat:"4bhk",price:"14,00,000",imageUrl:"https://media.istockphoto.com/id/1223059837/photo/cityscape-of-a-modern-residential-area-with-apartment-buildings-new-green-urban-landscape-in.webp?b=1&s=170667a&w=0&k=20&c=Tkl4Uj4qox255ArlqJsvgfCXEQwCVPMnMrh4_sWdp3c="},

                    {id:6,city:"punjab",flat:"3bhk",price:"11,00,000",imageUrl:"https://media.istockphoto.com/id/1488438637/photo/row-of-homes.webp?b=1&s=170667a&w=0&k=20&c=sIeoQWcaaZtmXr90VeBGEh8hnqiBS_ySuC8-JcoRpBE="}
                    ]
                    var self=this
                    this.propertyId = $routeParams.id 
                    this.property = this.myArray.filter(elem=>(this.propertyId==elem.id))
                    console.log(this.property[0].city)
                   myServiceMethod.getdata(this.property[0].city )                
                    .then(function(res){
                        console.log(res)
                          self.data= res
                          self.temp = self.data.main.temp
                          self.humid = self.data.main.humidity
                          self.wind = self.data.wind.speed

                      
                       
                    })
                   

                     

                }]

             })
              