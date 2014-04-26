	
	// criando uma nova app no angularjs

	var minhaApp = angular.module('minhaApp', ['ngRoute']);

	minhaApp.config(['$routeProvider',
		function($routeProvider) {
			$routeProvider.
				when('/home', {
					templateUrl: 'partials/home.html',
					controller: 'HomeCtrl'
				}).
				when('/partial2/', {
					templateUrl: 'partials/partial2.html',
					controller: 'Partial2Ctrl'
				}).
				otherwise({
					redirectTo: '/home'
				});
		}
	]);


	minhaApp.directive('minhaDiretiva', function() {
	  return {
	    restrict: 'A',
	    scope: { value: '=minhaDiretiva' },
	    template: '<span class="alert alert-info">{{value}}</span>',
	    link: function ( $scope, element, attrs ) {
	      //alert($(element));
	      $(element).parent().mouseout(function(){
	      	$(this).find("span").removeClass("alert-warning");
	      });
	      $(element).parent().mouseover(function(){
	      	$(this).find("span").addClass("alert-warning");
	      });

	    }
	  };
	});
