define(['app','hammer','imgDirective','imgService'],function (app) {
    app.controller('addPostCtrl', function($scope, $ionicPopup,$rootScope,actionImgShow,$ionicActionSheet,$timeout) {
        // Triggered on a button click, or some other target
    //     $scope.addcomment = function() {
    //         $scope.data = {}
    //         var myPopup = $ionicPopup.show({
    //             template: '<input type="text" ng-model="data.comment">',
    //             title: '添加评论',
    //             scope: $scope,
    //             buttons: [
    //                 { text: '取消' },
    //                 {
    //                     text: '<b>保存</b>',
    //                     type: 'button-positive',
    //                     onTap: function(e) {
    //                         return $scope.data.comment;
    //                     }
    //                 }
    //             ]
    //         });
    //         myPopup.then(function(res) {
    //             console.log('Tapped!', res);
    //         });
    //     };

    // }
    //弹出下拉框
    $scope.show = function() {

                  var hideSheet = $ionicActionSheet.show({
                      buttons: [
                        { text: '<b>Share</b>' },
                        { text: 'Upload' }
                      ],
                      destructiveText: 'Delete',
                      //titleText: '',
                      cancelText: 'Cancel',
                      cancel: function() {
                           // add cancel code..
                         },
                      buttonClicked: function(index) {
                        return true;
                      }
                  });

                  $timeout(function() {
                      hideSheet();
                  }, 2000);

              }; 



    var allimgs = [
      {
        imgsrc: '/img/mike.png'
      },
      {
        imgsrc: '/img/ben.png'
      }
    ];
    $scope.imgUrl = "img/";
    $scope.Images = ["mike.png", "ben.png"];
    $scope.allimgs=allimgs;
     /**
    *图片预加载
    */
    var arrImgs = new Array();
    for(var i=0; i<allimgs.length; i++) {

      var img = new Image();

      img.src = allimgs[i].imgsrc;

      img.onload = function(i) {
        arrImgs[i] = img;
      }(i);
      
    }

    $scope.onDoubleTap = function($index) {
      // console.log($index);
      // // console.log('双击');
      // alert("aa");
      actionImgShow.show({
        "larImgs": arrImgs,
        //"larImgs": allimgs,配置成这个也是可以的，只是图片没有预加载，每次放大预览都需要重新加载图片 
        "currentImg": $index,
        imgClose : function() {
          actionImgShow.close();
        }
    })};

  })
   
});