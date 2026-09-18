angular.module('blog', []);
angular.module('blog').controller('Rest', function ($scope, $http){
  $http.get('https://api-real-blog.onrender.com/postagens').
      success(function(data) {
          $scope.publicacoes = data;
      }
  );
});
