(function () {
'use strict';
angular.module('app.controller', [])
.controller('Controller', ['$scope', '$http', '$filter', Controller]);

function Controller($scope, $http, $filter) {
    var url = 'https://api.instagram.com/v1/tags/aaa/media/recent?access_token=3216622792.a21e9a2.d8e2ba20c5a44c4eaa7661959f5a26b9&callback=JSON_CALLBACK';
  	$http.jsonp(url).then(function(data){
        console.log(data.data.data);
        $scope.tags = data.data.data;

        /*for (var i = 0; i < tags.length; i++){
        	console.log(tags[i].link);
        	console.log(tags[i].user.full_name);
        	console.log(tags[i].user.profile_picture);
        	console.log(tags[i].caption.text);
        }*/
    });
}
})();