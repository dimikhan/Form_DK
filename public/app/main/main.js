angular.module('formApp')

    .controller('formController', function($scope, $http) {
        $scope.showContbus=false;
        $scope.showTesting=false;
        $scope.showcollabdev=false;

        $scope.showYesreqgroom=false;
        $scope.showYesiterplan=false;
        $scope.showYesconfigmgmt=false;
        $scope.showYesbuildmgmt=false;
        $scope.showYessqa=false;
        $scope.showYesunittest=false;
        $scope.showYesintegtest=false;
        $scope.showYesfunctest=false;
        $scope.showYesdepauto=false;
        $scope.ibmid=false;
        // we will store our form data in this object
        $scope.formData = {};
        
        $scope.tools = ['GitLab', 'Jenkins', 'Jira', 'SonarQube', 'UrbanCode Deploy', 'Track & Plan', 'Artifactory', 'Selenium', 'ANT', 'MAVEN', 'Others']
        $scope.emailFunc= function(){
            var res = $scope.formData.projectid;
            console.log("email ----" + res);
            $scope.myInput1 = res.substring(res.length - 11, res.length - 10);
            console.log("@ Function-----" + $scope.myInput1);
            $scope.myInput2 = res.substring(res.length - 8, res.length);
            console.log("My Input 2 ---" + $scope.myInput2);
            if(($scope.myInput1 === "@") && ($scope.myInput2 === ".ibm.com" || $scope.myInput2 === ".IBM.COM")){
            console.log("IBM ID");
            $scope.ibmid=false;
            }else{
            console.log("non IBM ID");
            $scope.ibmid = true;
            }
            };  
    

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
        
        $scope.YesReqGroom = function(data){
            if(data){
            $scope.showYesreqgroom=true;
            }else{
                $scope.showYesreqgroom=false;
            }
        }
        
        $scope.NoReqGroom = function(data){
            if(data){
            $scope.showYesreqgroom=false;
            }else{
                $scope.showYesreqgroom=true;
            }
        }

        $scope.YesIterPlan = function(data){
            if(data){
            $scope.showYesiterplan=true;
            }else{
                $scope.showYesiterplan=false;
            }
        }
        
        $scope.NoIterPlan = function(data){
            if(data){
            $scope.showYesiterplan=false;
            }else{
                $scope.showYesiterplan=true;
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

        $scope.YesConfigMgmt = function(data){
            if(data){
            $scope.showYesconfigmgmt=true;
            }else{
                $scope.showYesconfigmgmt=false;
            }
        }
        
        $scope.NoConfigMgmt = function(data){
            if(data){
            $scope.showYesconfigmgmt=false;
            }else{
                $scope.showYesconfigmgmt=true;
            }
        }

        $scope.YesBuildMgmt = function(data){
            if(data){
            $scope.showYesbuildmgmt=true;
            }else{
                $scope.showYesbuildmgmt=false;
            }
        }
        
        $scope.NoBuildMgmt = function(data){
            if(data){
            $scope.showYesbuildmgmt=false;
            }else{
                $scope.showYesbuildmgmt=true;
            }
        }

        $scope.YesSQA = function(data){
            if(data){
            $scope.showYessqa=true;
            }else{
                $scope.showYessqa=false;
            }
        }
        
        $scope.NoSQA = function(data){
            if(data){
            $scope.showYessqa=false;
            }else{
                $scope.showYessqa=true;
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

        $scope.YesUnitTest = function(data){
            if(data){
            $scope.showYesunittest=true;
            }else{
                $scope.showYesunittest=false;
            }
        }
        
        $scope.NoUnitTest = function(data){
            if(data){
            $scope.showYesunittest=false;
            }else{
                $scope.showYesunittest=true;
            }
        }

        $scope.YesIntegTest = function(data){
            if(data){
            $scope.showYesintegtest=true;
            }else{
                $scope.showYesintegtest=false;
            }
        }
        
        $scope.NoIntegTest = function(data){
            if(data){
            $scope.showYesintegtest=false;
            }else{
                $scope.showYesintegtest=true;
            }
        }

        $scope.YesFuncTest = function(data){
            if(data){
            $scope.showYesfunctest=true;
            }else{
                $scope.showYesfunctest=false;
            }
        }
        
        $scope.NoFuncTest = function(data){
            if(data){
            $scope.showYesfunctest=false;
            }else{
                $scope.showYesfunctest=true;
            }
        }

        $scope.YesDepAuto = function(data){
            if(data){
            $scope.showYesdepauto=true;
            }else{
                $scope.showYesdepauto=false;
            }
        }
        
        $scope.NoDepAuto = function(data){
            if(data){
            $scope.showYesdepauto=false;
            }else{
                $scope.showYesdepauto=true;
            }
        }

        $scope.submitform=function(){
            console.log("Inside Submit Function");
           var formdata = {
                "Customer Name": $scope.formData.name,
                "Project ID": $scope.formData.projectid,
                "UOM ID": $scope.formData.uomid,
                "Continuous Business Planning": $scope.formData.contbus,
                "Requirement Grooming": $scope.formData.reqgroom,
                "Requirement Grooming Text": $scope.formData.reqgroomtext, 
                "Iteration Planning": $scope.formData.iterplan,
                "Iteration Planning Text": $scope.formData.iterplantext,
                "Collaborative Development": $scope.formData.collabdev,
                "Config Management": $scope.formData.configmgmt,
                "Config Management Text": $scope.formData.configmgmttext,
                "Build Management": $scope.formData.buildmgmt,
                "Build Management Text": $scope.formData.buildmgmttext,
                "Static Quality Assurance": $scope.formData.sqa,
                "Static Quality Assurance Text": $scope.formData.sqatext,
                "Continuous Testing": $scope.formData.conttest,
                "Unit Testing": $scope.formData.unittest,
                "Unit Testing Text": $scope.formData.unittesttext,
                "Automated Integration Testing": $scope.integtest,
                "Automated Integration Testing Text": $scope.integtesttext,
                "Automated Functional Testing": $scope.formData.functest,
                "Automated Functional Testing Text": $scope.formData.functesttext,
                "Deployment automation": $scope.formData.depauto,
                "Deployment automation Text": $scope.formData.depautotext,
            };

            console.log(formdata);
            $http.post('/api/formdetails', formdata).success(function (data) {
                console.log('Data posted successfully');
            });  
        }
        
        
        
    });