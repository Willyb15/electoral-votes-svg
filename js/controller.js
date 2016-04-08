var interactiveMapApp = angular.module('interactiveMapApp', []);
interactiveMapApp.controller('interactiveMapController', function ($scope){
	// states in states-object.js are defined inside a function. we call the function here to define the state objects
	resetStates(); 
	$scope.states = states;

    $scope.stateClicked = function(state){
        var newColor = getNewColor(state);
    };

    function getNewColor(state){
        if(state.stateColor === "red"){
            //Reassign state color from red to blue
            state.stateColor = "blue";
        } else if(state.stateColor === "blue"){
            state.stateColor = "open";
        } else if(state.stateColor === "open"){
            state.stateColor = "red";
        }else{
            return "Are you part of the green party?";
        }
    }

    function calculateStateTotals(){
    	$scope.redStateVotes = 0;
    	$scope.openStateVotes = 0;
    	$scope.blueStateVotes = 0;
    	for(i=0; i<numStates;i++)
    		if(blueStates[i]){
    			$scope.blueStateVotes += blueStates[i].electoralVotes;
    		}else if(redStatesi[i]){
    			$scope.redStateVotes += redStates[i].electoralVotes;
    		}else if (redStatesi[i]){
    			$scope.openStateVotes += openStates[i].electoralVotes;
    		}
    	}

    	$scope.blueWidth = (($scope.blueStateVotes / 538) * 100) + '%';
    	$scope.redWidth = (($scope.redStateVotes / 538) * 100) + '%';
    	$scope.openWidth = (($scope.openStateVotes / 538) * 100) + '%';
    	console.log($scope.blueWidth);
    }
);
