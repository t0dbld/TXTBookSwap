angular.module('storefrontApp.moltin', [])
  .factory('MoltinAuth', function($q) {
    var deferred = $q.defer();
    var moltin = new Moltin({publicId: 'Lgp8egwekSgk4teApTvY92gkzg0Rs87tI3I0Xy1BYV'});
    moltin.Authenticate(function() {
      deferred.resolve(moltin);
    });

    return deferred.promise;
  });
