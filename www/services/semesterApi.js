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

angular.module('starter').factory('semesterApi',function semesterApiFactory(){
	var factory = {};

	factory.getYears = function (){
		return [
			    { year: '2016', id: 5 },
			    { year: '2015', id: 4 },
			    { year: '2014', id: 3 },
			    { year: '2013', id: 2 },
			    { year: '2012', id: 1 }
			  ];
	}

	return factory;
});
