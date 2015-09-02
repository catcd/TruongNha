/**
 * starter: Can Duy Cat
 * owner: Can Duy Cat
 * last update: 02-Sep-2015
 * type: main js
 */

var home = angular.module('myApp', ['ionic', 'controllers', 'shareds']);

home.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/sign-in');
	$stateProvider

		// abstract state
		.state('appMenu', {
			url: '',
			abstract: true,
			templateUrl: 'templates/app-menu.html'
		})
		.state('appBlank', {
			url: '',
			abstract: true,
			templateUrl: 'templates/app-blank.html'
		})

		// appBlank's children
		.state('signIn', {
			parent: 'appBlank',
			url: '/sign-in',
			templateUrl: 'templates/sign-in.html',
			controller: 'SignInController'
		})
		.state('register', {
			parent: 'appBlank',
			url: '/register',
			templateUrl: 'templates/register.html',
			controller: 'RegisterController'
		})

		// appMenu's children
		.state('classDetail', {
			parent: 'appMenu',
			url: '/class-detail',
			templateUrl: 'templates/class-detail.html',
			controller: 'ClassDetailController'
		})
		.state('home', {
			parent: 'appMenu',
			url: '/home',
			templateUrl: 'templates/home.html',
			controller: 'HomeController'
		})
		.state('Introduction', {
			parent: 'appMenu',
			url: '/introduction',
			templateUrl: 'templates/introduction.html',
			controller: 'IntroductionController'
		})
		.state('myClass', {
			parent: 'appMenu',
			url: '/my-class',
			templateUrl: 'templates/my-class.html',
			controller: 'MyClassController'
		})
		.state('myProfile', {
			parent: 'appMenu',
			url: '/my-profile',
			templateUrl: 'templates/my-profile.html',
			controller: 'MyProfileController'
		})
		.state('newComment', {
			parent: 'appMenu',
			url: '/new-comment',
			templateUrl: 'templates/new-comment.html',
			controller: 'NewCommentController'
		})
		.state('sample', {
			parent: 'appMenu',
			url: '/sample',
			templateUrl: 'templates/sample.html',
			controller: 'SampleController'
		})
		.state('school', {
			parent: 'appMenu',
			url: '/school',
			templateUrl: 'templates/school.html',
			controller: 'SchoolController'
		})
		.state('recentComment', {
			parent: 'appMenu',
			url: '/recent-comment',
			templateUrl: 'templates/recent-comment.html',
			controller: 'RecentCommentController'
		})
		.state('teacher', {
			parent: 'appMenu',
			url: '/teacher',
			templateUrl: 'templates/teacher.html',
			controller: 'TeacherController'
		})
});
