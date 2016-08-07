function SomeDirective() {
	return {
		template: [
			'<div>',
				'<h3>{{ some.counter }}</h3>',
			'</div>'
		].join(''),
    require: 'someDirective',
		controller: function() {
			this.counter = 0;
		},
		controllerAs: 'some',
		link: function (scope, elem, attrs, ctrl) {

      document.addEventListener('keyup',function(e){
        ctrl.counter += 1;
        scope.$apply();
      });
		}
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);
