var app = angular.module('first');

app.controller('SampleCtrl', SampleCtrl);

SampleCtrl.$inject = ['$scope'];

function SampleCtrl($scope) {
	$scope.empArr = [
	{'id': 1, 'name': 'Sankar', 'designation': 'Developer', 'number': 9876543210}
	];

	$scope.empDetails = function(obj) {
		// console.log(obj);
		obj.id = $scope.empArr.length + 1;
		$scope.empArr.push(obj);
		$scope.data = {};
		// console.log($scope.empArr);
	}

	$scope.getEmpData = function(emp) {
		// console.log(emp);
		$scope.empData = angular.copy(emp);
	}

	$scope.updateDetails = function(obj) {
		// console.log(obj);
		angular.forEach($scope.empArr, function(v, k) {
			if (v.id == obj.id) {
			// console.log(obj);
				v = obj;
				// console.log(v);
			}
		});
	}

	$scope.deleteEmp = function(index) {
		$scope.empArr.splice(index, 1);
	}

}