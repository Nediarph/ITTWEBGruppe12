var OblOpgave2 = angular.module('OblOpgave2', ['ui.router', 'ui.bootstrap']);
//We know that you're "supposed" to split up the controllers and such, but we haven't been able to get angular to recognize the module so we can "bind" the controllers in their own file.
OblOpgave2.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/home');
	
	$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: './views/partial-home.html',
			controller: 'foodController'
		})
		.state('about',{
			
		});
});

OblOpgave2.controller('foodController', function($scope, $uibModal, $log){
	$scope.message = "test";
	//Datepicker taken from  https://angular-ui.github.io/bootstrap/
	$scope.today = function(){
		$scope.dt = new Date();
	};
	$scope.today();
	
	$scope.clear = function(){
		$scope.dt = null;
	};
	
	$scope.toggleMin = function(){
		$scope.minDate = $scope.minDate ? null : new Date();
	};
	
	$scope.toggleMin();
	$scope.maxDate = new Date(2020, 5, 22);
	
	$scope.open = function($event) {
		$scope.status.opened = true;
	};
	
	$scope.setDate = function(year, month, day){
		$scope.dt = new Date(year, month, day);
	};
	
	$scope.dateOptions = {
		format: 'dd-mm-yyyy',
	}
	
	$scope.formats = ['dd-mm-yyyy', 'dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
	
	$scope.format = $scope.formats[0];
	
	$scope.status = {
		opened: false
	}
	
	var tomorrow = new Date();
	tomorrow.setDate(tomorrow.getDate() + 1);
	var afterTomorrow = new Date();
	afterTomorrow.setDate(tomorrow.getDate() + 2);
	
	$scope.events = [
		{
			date: tomorrow,
			status: 'full'
		},
		{
			date: afterTomorrow,
			status: 'partially'
		}
	];
	
	$scope.getDayClass = function(date, mode){
		if (mode === 'day'){
			var dayToCheck = new Date(date).setHours(0,0,0,0);
			
			for (var i=0; i<$scope.events.length;i++){
				var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);
				
				if (dayToCheck === currentDay){
					return $scope.events[i].status;
				}
			}
		}
		return '';
	};
	
	$scope.food = [
		{
			name: 'test1',
			test2: 'tester',
			test3: 'tester2'
		},
		{
			name: 'test2',
			test2: 'tester',
			test3: 'tester2'
		},
		{
			name: 'test3',
			test2: 'tester',
			test3: 'tester2'
		}
		
	];
	
	$scope.animationsEnabled = false;
	$scope.items = 'GET DAT LIST OF FOOD'
	
	$scope.openModal = function(size){
		
		var modalInstance = $uibModal.open({
			animation: $scope.animationsEnabled,
			templateUrl: 'foodModalContent.html',
			controller: 'ModalInstanceCtrl',
			size: size,
			resolve: {
				items: function(){
					return $scope.items;
				}
			}
		});
		
		modalInstance.result.then(function(selectedItem){
			$scope.selected = selectedItem;
		});
	};

});

OblOpgave2.controller('ModalInstanceCtrl', function($scope, $uibModalInstance, items){
	$scope.items = items;
	$scope.selected = {
		item: $scope.items[0]
	};
	var itemSelected;
	$scope.grams = {value: 0};
	$scope.setItem = function (setItem){
		itemSelected = setItem;
	}
	
	$scope.ok = function(){
		$uibModalInstance.close({foodName: itemSelected, grams: $scope.grams});
	};
	
	$scope.cancel = function() {
		$uibModalInstance.dismiss('cancel');
	};
});

