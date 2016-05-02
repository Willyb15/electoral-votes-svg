var interactiveMapApp = angular.module('interactiveMapApp', []);
interactiveMapApp.controller('interactiveMapController', function($scope) {
    // states in states-object.js are defined inside a function. we call the function here to define the state objects
    resetStates();
    $scope.states = states;
    $scope.smallStates = smallStates;
    calculateStateTotals();

    $scope.reset = function() {
        resetStates();
        $scope.states = states;
        calculateStateTotals();
        document.getElementById('message').style.visibility = "hidden";
    };

    $scope.stateClicked = function(state) {
        var newColor = getNewColor(state);
    };

    calculateWaysToWin = function() {

        $scope.blueWins = waysTo270For('blue');
        $scope.redWins = waysTo270For('red');
    };

    function calculateStateTotals() {
        $scope.redStateVotes = 0;
        $scope.openStateVotes = 0;
        $scope.blueStateVotes = 0;
        for (i = 0; i < numStates; i++)
            if (blueStates[i]) {
                $scope.blueStateVotes += blueStates[i].electoralVotes;
            } else if (redStates[i]) {
            $scope.redStateVotes += redStates[i].electoralVotes;
        } else if (openStates[i]) {
            $scope.openStateVotes += openStates[i].electoralVotes;
        }

        $scope.blueWidth = (($scope.blueStateVotes / 538) * 100) + '%';
        $scope.redWidth = (($scope.redStateVotes / 538) * 100) + '%';
        $scope.openWidth = (($scope.openStateVotes / 538) * 100) + '%';
        console.log($scope.blueWidth);
    }

    function getNewColor(state) {
        if (state.stateColor == "red") {
            // reassign color from red to blue
            state.stateColor = "blue";
            $scope.blueStateVotes += state.electoralVotes;
            $scope.redStateVotes -= state.electoralVotes;
        } else if (state.stateColor == "blue") {
            state.stateColor = "open";
            $scope.openStateVotes += state.electoralVotes;
            $scope.blueStateVotes -= state.electoralVotes;
        } else if (state.stateColor == "open") {
            state.stateColor = "red";
            $scope.redStateVotes += state.electoralVotes;
            $scope.openStateVotes -= state.electoralVotes;
        }
        // calcStateTotals();
        $scope.blueWidth = (($scope.blueStateVotes / 538) * 100) + '%';
        $scope.redWidth = (($scope.redStateVotes / 538) * 100) + '%';
        $scope.openWidth = (($scope.openStateVotes / 538) * 100) + '%';
        console.log($scope.blueStateVotes);
        
        if ($scope.redStateVotes > 269) {
        document.getElementById('message').style.visibility = "visible";
            var html = '<div>';
            html += "<h1>YOU HAVE LET THE REPUBLICANS WIN!!</h1>";
            html += "<h1>TRUMP TAKES THE WHITE HOUSE!!</h1>";

            document.getElementById('message').innerHTML = "";
            document.getElementById('message').innerHTML = html;
           
        }
        if ($scope.blueStateVotes > 269) {
            document.getElementById('message').style.visibility = "visible";
            var html = '<div>';
            html += "<h1>YOU HAVE LET THE DEMOCRATS WIN</h1>";
            document.getElementById('message').innerHTML = "";
            document.getElementById('message').innerHTML = html;
        }
    }

});