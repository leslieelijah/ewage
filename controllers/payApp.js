
(function(){
    
 var app = angular.module("payApp", ['ngRoute']);
    
//Create a controller
/*
app.controller('mainController', ['$scope', '$http', fuappnction ($scope, $http) {

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
                    })

                    .otherwise({ redirectTo: '/' });
                });
   
    
}());







