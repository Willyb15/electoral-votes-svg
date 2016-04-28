#An interactive map created with Angular data-binding and SVG's.
###Created JSON with State Election Data inside
###Each state has 3 options for their total Electoral votes to count towards
####Democrat, Republican, or Independent
###When the state is clicked the options are toggled and total Electoral Votes is updated accordingly
####This is the HTML for drawing the SVG's with "foreign objects"
```html
<div id="map-wrapper">
			<svg width="750" height="500">
				<g ng-repeat="state in states | filter: isSmall = false" ng-click="stateClicked(state)">
					<path class="state {{state.stateColor}}" ng-attr-d="{{state.vector}}" stroke="white"></path>
					<foreignObject ng-attr-x="{{state.nameX}}" ng-attr-y="{{state.nameY}}">
						<div class="state-info">
							{{state.abbr}}<br />{{state.electoralVotes}}
						</div>
					</foreignObject>
				</g>
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
