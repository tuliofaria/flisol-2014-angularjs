	angular.module('minhaApp').
    	controller('ContatosCtrl', function ($scope){
    		$scope.nomeTxt = "";
       		$scope.contatos = [];

       		$scope.addContato = function(){
       			if($scope.nomeTxt!=""){
       				$scope.contatos.push({ nome: $scope.nomeTxt });
       				$scope.nomeTxt = "";
       			}
       		}

       		$scope.removeContato = function(contato){
       			$scope.contatos.splice($scope.contatos.indexOf(contato), 1);
       		}
     	}
     );


    // alternativa
    /*function ContatosCtrl($scope){

    }*/