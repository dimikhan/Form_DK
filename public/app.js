var formApp = angular.module('formApp', [])

    .controller('formController', function($scope) {
        $scope.showContbus=false;
        $scope.showTesting=false;
        $scope.showcollabdev=false;
        // we will store our form data in this object
        $scope.formData = {};
        
        $scope.YesContBus = function(data){
            if(data){
            $scope.showContbus=true;
            }else{
                $scope.showContbus=false;
            }
        }
        
        $scope.NoContBus = function(data){
            if(data){
            $scope.showContbus=false;
            }else{
                $scope.showContbus=true;
            }
        }
        
        $scope.YesCollabDev = function(data){
            if(data){
            $scope.showcollabdev=true;
            }else{
                $scope.showcollabdev=false;
            }
        }
        
        $scope.NoCollabDev = function(data){
            if(data){
            $scope.showcollabdev=false;
            }else{
                $scope.showcollabdev=true;
            }
        }
        
        $scope.YesContTest = function(data){
            if(data){
            $scope.showTesting=true;
            }else{
                $scope.showTesting=false;
            }
        }
        
        $scope.NoContTest = function(data){
            if(data){
            $scope.showTesting=false;
            }else{
                $scope.showTesting=true;
            }
        }
        
        
        
    });