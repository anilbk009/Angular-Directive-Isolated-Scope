var app = angular.module("myApp", []);

//@ Used to pass a string value into the directive
app.directive('myIsolatedScopeWithName', function () {
    return {
        scope: {
            genicName: '@testabc'
        },
        template: '<b>Using @ scope :</b> Name: {{ genicName}}',
 link: function (scope, element, attrs) { 
//no change in the scope as it binded to application scope
      scope.genicName.name="test"
        
       }
    };
});



//=    Used to create a two-way binding to an object that is passed into the directive
app.directive('isolatedScopeWithModel', function () {
    return {
        scope: {
            genicName: '=customerdata' //Two-way data binding
        },
        template: '<b>using = scope :</b> Name: {{ genicName.name}}',
       link: function (scope, element, attrs) { 
// change in scope updates to application scope      
       scope.genicName.name="Changing name to some other name"
        
       }
    };
});




//&    Allows an external function to be passed into the directive and invoked
app.directive('myIsolatedScopeWithModelAndFunction', function () {
    return {
        scope: {
            genicName: '=datasource',
            genicAction: '&action'
        },
        template: '<ul><li ng-repeat="prop in genicName">{{ prop }}</li></ul> ' +
                  '<button ng-click="genicAction()">Change Data</button>'
    };
});



//controller
app.controller('CustomersController', ['$scope', function ($scope) {
 var counter = 0;
 $scope.name="data genic";
    $scope.customer = {
        name: 'David',
        street: '1234 Anywhere St.'
    }        
    $scope.addCustomer = function () {
        counter++;
        $scope.customers.push({
            name: 'New Customer' + counter,
            street: counter + ' Cedar Point St.'
        });
    };
    $scope.changeData = function () {
        counter++;
        $scope.customer = {
            name: 'James'+counter,
            street: counter + ' Cedar Point St.'
        };
    };
}]);



