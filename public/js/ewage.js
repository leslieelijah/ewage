module.exports = function(app){
    
    var app = angular.module('payApp', []);

    //Create a controller
    angular.module('payApp').controller('mainController', 
        function ($scope) {

            var url = "../assets/json/emp-db.txt";
            var pageTitle = "Sage-Pay";
            var titleName = "PaySlip";
            var daysPerMonth = 21;
            var hourPerday = 8;
            var hoursPerMonth = daysPerMonth * hourPerday;

            $http.get(url).then(function (response, request) { 
                $scope.employees = response.data; 
            });

            $scope.empDetails = [
                {  "First Name": $scope.name,
                   "Last Name": $scope.lastName,
                   "Employee Number": $scope.age,
                   "Employee Title": $scope.title,
                   "Employee Mobile Number": $scope.mobileNo,
                   "Age": $scope.age,
                   "Birth Date": $scope.birthDate
                }];

            $scope.empDetails = {

            };

            $scope.AddEmployees = function(){
                $scope.errMsg = "";
                if (!$scope.addEmployee) {return;}
                if ($scope.objEmployees.indexOf($scope.addMe) == -1) {
                    $scope.objEmployees.push($scope.addMe);
                } else {
                    $scope.errMsg = "The employees exists in the Database";
                }
            };

            $scope.removeItem = function (x) {
                $scope.errMsg = "";
                $scope.objEmployees.splice(x, 1);
            }

            $scope.hoursPerMonth = hoursPerMonth;
            $scope.titleName = titleName;
            $scope.pageTitle = pageTitle;
            $scope.hourPerday = hourPerday;
    });
    
};




