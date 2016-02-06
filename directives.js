// DIRECTIVES
weatherApp.directive('weatherReport', function() {
	return {
		restrict: 'E',
		templateUrl: 'directives/weather-report.htm',
		replace: true,
		scope: {
			weatherDay: "=",
			convertToStandard: "&",
			convertToDate: "&",
			dateFormat: "@"
		}
	}
})