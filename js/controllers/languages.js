application.controller('languages', function($scope){

	$scope.myFavLanguage = 'None'; 

	$scope.php = function() {
		$scope.myFavLanguage = 'PHP';
	};

	$scope.javascript = function() {
		$scope.myFavLanguage = 'Javascript';
	};

	$scope.cpp = function() {
		$scope.myFavLanguage = 'C++';
	};

	$scope.java = function() {
		$scope.myFavLanguage = 'Java';
	};

});