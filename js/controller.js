var interactiveMapApp = angular.module('interactiveMapApp', []);
interactiveMapApp.controller('interactiveMapController', function ($scope){
	// states in states-object.js are defined inside a function. we call the function here to define the state objects
	resetStates(); 
	$scope.states = states;
    calculateStateTotals();

    $scope.stateClicked = function(state){
        var newColor = getNewColor(state);
    };

    function getNewColor(state){
        if(state.stateColor === "red"){
            state.stateColor = "blue";
            blueStates[state.id] = state;
            redStates[state.id] = "";
        }else if(state.stateColor === "blue"){
            state.stateColor = "open";
            openStates[state.id] = state;
            blueStates[state.id] = "";
        }else if(state.stateColor === "open"){
            state.stateColor = "red";
            redStates[state.id] = state;
            openStates[state.id] = "";
        }
        calcStateTotals();
    }

    function calculateStateTotals(){
    	$scope.redStateVotes = 0;
    	$scope.openStateVotes = 0;
    	$scope.blueStateVotes = 0;
    	for(i=0; i<numStates;i++)
    		if(blueStates[i]){
    			$scope.blueStateVotes += blueStates[i].electoralVotes;
    		}else if(redStates[i]){
    			$scope.redStateVotes += redStates[i].electoralVotes;
    		}else if (redStates[i]){
    			$scope.openStateVotes += openStates[i].electoralVotes;
    		}
    	}

    	$scope.blueWidth = (($scope.blueStateVotes / 538) * 100) + '%';
    	$scope.redWidth = (($scope.redStateVotes / 538) * 100) + '%';
    	$scope.openWidth = (($scope.openStateVotes / 538) * 100) + '%';
    	console.log($scope.blueWidth);
    }
);
