define(['app'],function (app) {
    app.controller('tabs', function($scope,$ionicActionSheet,$timeout,$location) {
    //弹出下拉框
    $scope.show = function() {

                  var hideSheet = $ionicActionSheet.show({
                      buttons: [
                        { text: '创建课程' },
                        { text: '扫码加入课程' },
                        { text: '输入邀请码加入课程' }
                      ],
                       cancelText: '取消',
                      cancel: function() {
                           // add cancel code..
                         },
                      buttonClicked: function(index) {
                        var curUrl = $location.absUrl();
                        //alert(curUrl);
                        //window.location.href="#/tab/add" ;
                        if(index!=0){
                            $location.path('tab/add');
                        }else{
                            $location.path('tab/home');
                        }         
                        // $state.go('tab.add');
                        hideSheet();
                        return true;
                      }
                  });

                  $timeout(function() {
                      hideSheet();
                  }, 2000);

              }; 
  })
   
});