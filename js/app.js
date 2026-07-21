var app= angular.module('campus-360',[]);

app.controller("dashboardcontroller",function($scope){


    $scope.collegename = "FISAT";
    $scope.totalStudents = 1200;
    $scope.totalFaculty = 85;

    console.log("dashboard controller is loaded");

    $scope.students=[
        "Shahid","John","Allen","Shaun"
    ];

    $scope.addStudent=function (){
        $scope.totalStudents++;
    }
});