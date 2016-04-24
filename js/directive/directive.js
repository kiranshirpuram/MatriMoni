angular.module('mmApp').directive('options', function() {
  return {
    restrict: 'E',
    priority: 1,
    link: function(scope, element, attrs) {
      element.append('btn');
    }
  };
});

angular.module('mmApp').directive('fileModel', ['$parse', function ($parse) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var model = $parse(attrs.fileModel);
            var modelSetter = model.assign;
            
            element.bind('change', function(){
                scope.$apply(function(){
                    modelSetter(scope, element[0].files[0]);
                });
            });
        }
    };
}]);