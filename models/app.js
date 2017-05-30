
(function(){
    
 var app = angular.module("payApp", ['ngRoute']);
    
//Create a controller
/**/
app.controller('mainController', ['$scope', '$http', function ($scope, $http) {

        var url = "/public/json/emp-db.txt";       
        var daysPerMonth = 21;
        var hourPerday = 8;
        var hoursPerMonth = daysPerMonth * hourPerday;
        
        $http.get(url).then(function (res, req) { 
            $scope.employees = res.data; 
        });

       $scope.hoursPerMonth = hoursPerMonth;
       // $scope.titleName = titleName;
       // $scope.pageTitle = pageTitle;
       $scope.hourPerday = hourPerday;

}]);

    
app.controller('employeeController', [ '$scope', function($scope){ 
   
    $scope.submit = function(employee){
        $scope.employee = {};
        $scope.employee.firstName = "John";
        $scope.employee.surname = "Doe";
        $scope.employee.age = 32;
        $scope.employee.gender = "Male";
        $scope.employee.race = "African";

        $scope.contacts = {};
        $scope.contacts.cellNumber = 0 + "815822661";
        $scope.contacts.email = "joe@test.co.za";
        $scope.contacts.age = "address";          
        
    };
    
  
}]);   
      
    
app.config(function ($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "main.html"
        //controller: 'mainController'
    })
    .when("/details", {
        templateUrl: "details.html"
    })
    .when("/salaries", {
        templateUrl: "salaries.html"
    })
    .when("/print", {
        templateUrl: "print.html"
    })
    
    .otherwise({ redirectTo: '/' });
});
   
    
}());







