var app = angular.module("campus-360", []);

app.controller("dashboardcontroller", function ($scope) {

    $scope.collegename = "FISAT";
    $scope.totalStudents = 1200;
    $scope.totalFaculty = 85;

    console.log("Dashboard Controller Loaded");

    $scope.students = [
        "Shahid",
        "John",
        "Allen",
        "Shaun"
    ];

    $scope.showStudents = true;
    $scope.showDashboard = true;

    // Add Student
    $scope.addStudent = function () {
        $scope.students.push("New Student");
        $scope.totalStudents++;
    };

    // Add Faculty
    $scope.addFaculty = function () {
        $scope.totalFaculty++;
    };

});