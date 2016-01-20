/*
//this one works too
(function(){
	'use strict';

	angular.module('starter').factory('semesterApi',[semesterApi]);

	function semesterApi(){

		function getYears(){
			return [
				    { year: '2016', id: 5 },
				    { year: '2015', id: 4 },
				    { year: '2014', id: 3 },
				    { year: '2013', id: 2 },
				    { year: '2012', id: 1 }
				  ];
		}

		return {
			getYears : getYears
		};
	}

})();*/

angular.module('starter').factory('semesterApi',['$http','$q','$ionicLoading',function semesterApiFactory($http, $q, $ionicLoading){
	var factory = {};

	factory.getYears = function (){
		var deferred = $q.defer();


		$ionicLoading.show({template:'Loading...'});

		$http({
			method:'get',
		//url: "http://10.9.181.32/UniversityUI/api/GetYears",
		url: "http://USCMPDEPC218/UniversityUI/api/GetYears",
		    dataType: 'jsonp'		
		}).success(function(data){
  			$ionicLoading.hide();
			deferred.resolve(data);
		}).error(function(err){
			console.log("hata oldu ula " + err);
			$ionicLoading.hide();
			deferred.reject();
		});

		return deferred.promise;

	}

	return factory;
}]);
