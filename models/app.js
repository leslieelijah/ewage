
(function(){
    
 var app = angular.module("payApp", ['ngRoute']);
    
//Create a controller
<<<<<<< HEAD
/**/
=======
>>>>>>> 5880a2ad9f210f13c0a3698aa9d610aa2a09f7f2
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
<<<<<<< HEAD

    
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
      
=======
    
app.controller('detailsCntlr', [ '$scope', function($scope){ 
    $scope.details = {};
    $scope.details.firstName = "John";
    $scope.details.surname = "Doe";
    $scope.details.age = 32;
    $scope.details.gender = "Male";
    $scope.details.race = "African";
}]);
    
app.controller('contactsCntlr', [ '$scope', function($scope){ 
    $scope.contacts = {};
    $scope.contacts.cellNumber = 0 + "815822661";
    $scope.contacts.email = "joe@test.co.za";
    $scope.contacts.age = "address";  
}]);   
    
    
app.controller('salariesCntlr', [ '$scope', function($scope){ 
    $scope.salaries = {};
    $scope.salaries.hourlyRate = 125;
    $scope.salaries.daysWorked = 22;    
    $scope.salaries.hoursWorked = 8;
    $scope.salaries.salary = $scope.salaries.hourlyRate *  $scope.salaries.daysWorked * $scope.salaries.hoursWorked;       
}]);
    
    
>>>>>>> 5880a2ad9f210f13c0a3698aa9d610aa2a09f7f2
    
app.config(function ($routeProvider) {
    $routeProvider
    .when("/", {
<<<<<<< HEAD
        templateUrl: "main.html"
        //controller: 'mainController'
=======
        templateUrl: "main.html",
        controller: 'mainController'
>>>>>>> 5880a2ad9f210f13c0a3698aa9d610aa2a09f7f2
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







