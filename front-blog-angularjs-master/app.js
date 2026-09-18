angular.module('blog', []);
angular.module('blog').controller('Rest', function ($scope, $http){
  $http.get('https://api-real-blog.onrender.com/categorias').
      success(function(data) {
          $scope.publicacoes = data;
      }
  );
});
