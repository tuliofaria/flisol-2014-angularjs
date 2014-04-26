	angular.module('minhaApp').controller('HomeCtrl', function ($scope){
    		$scope.home = "Texto do scope do HomeCtrl";
     	}
  );

  angular.module('minhaApp').controller('Partial2Ctrl', function ($scope){
        $scope.partial2 = "Texto do scope do Partial2Ctrl";
      }
  );