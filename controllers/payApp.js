
(function(){
    
 var app = angular.module("payApp", ['ngRoute']);
    
//Create a controller
<<<<<<< HEAD
/*
app.controller('mainController', ['$scope', '$http', fuappnction ($scope, $http) {
=======
app.controller('mainController', ['$scope', '$http', function ($scope, $http) {
>>>>>>> 5880a2ad9f210f13c0a3698aa9d610aa2a09f7f2

                    var url = "assets/json/emp-db.txt";
                    var pageTitle = "Kolobje";
                    var titleName = "Employees Payroll";        
                    var daysPerMonth = 21;
                    var hourPerday = 8;
                    var hoursPerMonth = daysPerMonth * hourPerday;

                    $http.get(url).then(function (res, req) { 
                        $scope.employees = res.data; 
                    });

                    $scope.hoursPerMonth = hoursPerMonth;
                    $scope.titleName = titleName;
                    $scope.pageTitle = pageTitle;
                    $scope.hourPerday = hourPerday;

            }]);
<<<<<<< HEAD
*/
app.config(function ($routeProvider) {
                    $routeProvider
                    .when("/", {
                        templateUrl: "/partials/main.html",
                        controller: 'mainController'
                    })
                    .when("/details", {
                        templateUrl: "/partials/details.html"
                    })
                    .when("/payroll", {
                        templateUrl: "/partials/payroll.html"
                    })
                    .when("/newemp", {
                        templateUrl: "/partials/newemp.html"
=======

app.config(function ($routeProvider) {
                    $routeProvider
                    .when("/", {
                        templateUrl: "main.html",
                        controller: 'mainController'
                    })
                    .when("/details", {
                        templateUrl: "details.html"
                    })
                    .when("/payroll", {
                        templateUrl: "payroll.html"
                    })
                    .when("/newemp", {
                        templateUrl: "newemp.html"
>>>>>>> 5880a2ad9f210f13c0a3698aa9d610aa2a09f7f2
                    })

                    .otherwise({ redirectTo: '/' });
                });
   
    
}());







