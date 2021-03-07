(function () {
'use strict'; 

angular.module('mod1-solution', [])
.controller('MsgController', function ($scope) {
    $scope.listItems = "";
    
    
    $scope.result = function () {
        var separator = ",";
        var str = $scope.listItems;
        var myString = str.split(separator);
        $scope.msg="";
        if (str.length == 0) {
            // alert("Please enter data first!");
            $scope.msg = "Please enter data first!";
        } else
        if (myString.length >=1 && myString.length <= 3) {
            // alert("Number of Items: " + myString.length);
            // alert("Enjoy!");
            $scope.msg = "Enjoy!";
        } else {
            if (myString.length >= 4) {
                // alert("Number of Items: " + myString.length);
                // alert("Too Much");
                $scope.msg = "Too Much!";
            }
        }
            
    }
0
});
    
})();