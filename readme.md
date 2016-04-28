#An interactive map created with Angular data-binding and SVG's.
###Created JSON with State Election Data inside. Here's what first 3 state objects look like...I cut the SVG's data short since they were long as *heck;
```js
function State(id,name,abbr,stateColor,electoralVotes,nameX, nameY,vector, isSmall, smallStateVal) {
	this.id = id;
    this.name = name;
    this.abbr = abbr;
    this.stateColor = stateColor;
    this.nameX = nameX;
    this.nameY = nameY;
    this.electoralVotes = electoralVotes;
    this.vector = vector;
    this.isSmall = isSmall;
    this.smallStateVal = smallStateVal;
}
function resetStates(){
    //init arrays
	//states = vector and data info
    states = [];
	//Separate array for state, by color
    blueStates = [];
    redStates = [];
    openStates = [];
    smallStates = [];
	states.push(new State(0,"Alabama","AL","red",9,"498.65026993738195",904367521223L501.811,...,false,0));
	states.push(new State(1,"Alaska","AK","red",3,".52507095L45.686552491678796,471.9223",false,0))
	states.push(new State(2,"Arizona","AZ","red",11,"140.01684121050394",",false,0))
```

###Each state has 3 options for their total Electoral votes to count towards
####Democrat, Republican, or Independent
###When the state is clicked the options are toggled and total Electoral Votes is updated accordingly
####This is the HTML for drawing the SVG's with "foreign objects" with data injected into the view Using Angular
```html
			<svg width="750" height="500">
				<g ng-repeat="state in states | filter: isSmall = false" ng-click="stateClicked(state)">
					<path class="state {{state.stateColor}}" ng-attr-d="{{state.vector}}" stroke="white"></path>
					<foreignObject ng-attr-x="{{state.nameX}}" ng-attr-y="{{state.nameY}}">
						<div class="state-info">
							{{state.abbr}}<br />{{state.electoralVotes}}
						</div>
					</foreignObject>
				</g>
```
###Angular to inject State Abbreviation into Map and add a click listener 
```html
				<g ng-repeat="state in states | filter: isSmall = true" ng-click="stateClicked(state)">
					<path class="state {{state.stateColor}}" ng-attr-d="{{state.vector}}" stroke="white"></path>
				</g>		
					<table>
						<tr ng-repeat="state in states | filter: isSmall = true" ng-click="stateClicked(state)">
							<td class="state {{state.stateColor}}">{{state.electoralVotes}}</td>
							<td>{{state.abbr}}</td>
						</tr>
					</table>
			</svg>
```
