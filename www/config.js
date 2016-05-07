(function () {
angular.module('app.config', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('app.instagram', {
    url: '/instagram',
    cache: false,
    views: {
      'mainMenu': {
        templateUrl: 'instagram.html',
        controller: 'Controller'
      }
    }
  })
})
})();