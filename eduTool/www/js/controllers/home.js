define(['app'],function (app) {
    // app.controller('homeCtrl', ['$scope', function($scope) {
    //     var pages = "#/tab/home+#/tab/message+#/tab/add+#/tab/friend+#/tab/mine";
    //     $scope.$on('$ionicView.afterEnter', function() {
    //         if (pages.indexOf(location.hash) > -1) {
    //             var tabs =document.getElementsByTagName('ion-tabs');
    //             angular.element(tabs).removeClass("tabs-item-hide");
    //         }
    //     });
    //     $scope.$on('$ionicView.beforeLeave', function() {
    //         if (pages.indexOf(location.hash) > -1) return;
    //         var tabs =document.getElementsByTagName('ion-tabs');
    //         angular.element(tabs).addClass("tabs-item-hide");
    //     });

    //     var varity = ['discovery', 'location'];
    //     $scope.type = varity[0];
    //     $scope.changeType = function(num) {
    //         $scope.type = varity[num];
    //     };
    //     var activity = ['activity', 'personal', 'group'];
    //     $scope.act = activity[0];
    //     $scope.changeAct = function(num) {
    //         $scope.act = activity[num];
    //     };

    // }]);


app.controller('homeCtrl', function($scope, $http,$ionicActionSheet,$timeout) {
  // $http.get("http://162.105.76.228/webapp.json")
  // .success(function (response) {
  //    $scope.hello=1;
 
  // });
  // var pages = "#/tab/home+#/tab/message+#/tab/add+#/tab/friend+#/tab/mine";
  //  $scope.$on('$ionicView.afterEnter', function() {
  //           if (pages.indexOf(location.hash) > -1) {
  //               var tabs =document.getElementsByTagName('ion-tabs');
  //               angular.element(tabs).removeClass("tabs-item-hide");
  //           }
  //       });
  //       $scope.$on('$ionicView.beforeLeave', function() {
  //           if (pages.indexOf(location.hash) > -1) return;
  //           var tabs =document.getElementsByTagName('ion-tabs');
  //           angular.element(tabs).addClass("tabs-item-hide");
  //       });
 $scope.webapp='1';
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

              //   $scope.edit = function() {

              //     var hideSheet = $ionicActionSheet.show({
              //         buttons: [
              //           { text: '创建课程' },
              //           { text: '扫码加入课程' },
              //           { text: '输入邀请码加入课程' }
              //         ],
              //          cancelText: '取消',
              //         cancel: function() {
              //              // add cancel code..
              //            },
              //         buttonClicked: function(index) {
              //           var curUrl = $location.absUrl();
              //           //alert(curUrl);
              //           //window.location.href="#/tab/add" ;
              //           if(index!=0){
              //               $location.path('tab/add');
              //           }else{
              //               $location.path('tab/home');
              //           }         
              //           // $state.go('tab.add');
              //           hideSheet();
              //           return true;
              //         }
              //     });

              //     $timeout(function() {
              //         hideSheet();
              //     }, 2000);

              // }; 
//     $http({
//     url:'http://162.105.76.228/webapp.json',
//     method:'GET'
//     }).success(function(response){
//     //响应成功

//     var webapp=angular.fromJson(response);
//     //alert(angular.fromJson(webapp));
//     $scope.webapp=response;
//     }).error(function(response){
//     //处理响应失败
//     });
 
// });

//ajax请求
// var xmlhttp; 
// if(window.XMLHttpRequest) 
// { 
// // code for IE7+, Firefox, Chrome, Opera, Safari 
// xmlhttp=new XMLHttpRequest(); 
// } 
// else 
// { 
// // code for IE6, IE5 
// xmlhttp=new ActiveXObject("Microsoft.XMLHTTP"); 
// } 
// //onreadystatechange 存储函数（或函数名），每当 readyState 属性改变时，就会调用该函数。 
// xmlhttp.onreadystatechange=function() 
// { 
// //readyState 
// //存有 XMLHttpRequest 的状态。从 0 到 4 发生变化。 
// //0: 请求未初始化 
// //1: 服务器连接已建立 
// //2: 请求已接收 
// //3: 请求处理中 
// //4: 请求已完成，且响应已就绪 
// //status 
// //200: "OK" 
// //404: 未找到页面 
// if (xmlhttp.readyState==4 && xmlhttp.status==200) 
// { 
// $scope.webapp=xmlhttp.responseText; 
// } 
// } 
// xmlhttp.open("POST","http://162.105.76.228/cmd",true); 
// xmlhttp.send("id=1"); 
// });


var obj={id: "kangkang"};
var str = angular.toJson(obj);  
//post
var v="kangkang";
        $http({  
            method: 'GET',  
            url: 'http://162.105.76.228/cmd',  
          // url:'http://162.105.76.228/webapp.json',
            // url:'http://162.105.76.228/webapp.json',
            // params:{  
            //     'id': 'ch1' 
            // }  
            // headers: {
            // 'Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8'
            // },        
            // data:  str
         }).success(function(responseText){  
         
          $scope.webapp=responseText;            
         }).error(function(data,status,headers,config){  
                alert("连接服务器失败");
         }); 
});


});
    
