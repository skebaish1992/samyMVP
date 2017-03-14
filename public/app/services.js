angular.module('subjectivityRouter', ['ngRoute',
  'subjectivityRouter.subjectivityApp', 'subjectivityRouter.barChart'
])
.config(function ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/signIn', {
      templateUrl: 'app/test/signIn/signIn.html'
      // // controller: 'AuthController',
      // authenticate: false
    })
    .when('/signup', {
      templateUrl: 'app/test/signup/signUp.html'
    })
    // Your code here
    .when('/analytics', {
      templateUrl: 'app/test/analytics/analytics.html',
      controller: 'BarCtrl'
      // controller: 'LinksController',
      // authenticate: true
    })
    .when('/home', {
      templateUrl: 'app/test/home/home.html',
      controller: 'userResponseCtrl'
    })
    .otherwise({
      templateUrl: 'app/test/home/home.html',
      controller: 'userResponseCtrl'
    });
  $locationProvider.hashPrefix('');
});