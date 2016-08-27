function SomeDirective() {
  return {
    template: [
      '<div>',
      '<h3>{{ some.counter }}</h3>',
      '</div>'
    ].join(''),
    controller: function($scope) {
      // $scope.counter = 0;
      this.counter = 0;
    },
    controllerAs: 'some',
    // require: 'someDirective',
    link: function (scope, elem, attrs, ctrl) {
      // var actualElem = elem[0];
      document.addEventListener('keydown', function(event) {
	ctrl.counter += 1;
	scope.$digest();
      });
    }
  }
}

angular
  .module('app')
  .directive('someDirective', SomeDirective);
