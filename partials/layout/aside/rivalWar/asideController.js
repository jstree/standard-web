'use strict';

define(['projectWeb'], function () {

  var rivalWarAsideModule = angular.module('rivalWarAsideControllerModule', ['rivalWarLayoutServiceModule','rivalWarDataServiceModule']);

  rivalWarAsideModule.controller('rivalWarAsideController', ['rivalWarLayoutService', 'rivalWarDataService', '$scope',
    function (rivalWarLayoutService, rivalWarDataService, $scope) {

      console.log('rivalWarAsideController');

      $scope.init = function () {

        $scope.warList = null;
        var url = 'http://www.313.co.kr/rivalWar/api/menu/getChildMenu.do';
        var param = {c_id:10};
        rivalWarDataService.getData(url, 'GET', param, function(dataResponse) {
          //pure callback method
          $scope.warList = dataResponse;

          //plus add callback
          $('.repeatList > li').eq(0).addClass('on');

        });

      };
      $scope.init();


    }]);
});
