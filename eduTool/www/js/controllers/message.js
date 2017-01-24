define(['app'],function (app) {   
//     app.controller('messageCtrl', function($scope, $timeout) {
//         var pages = "#/tab/home+#/tab/message+#/tab/add+#/tab/friend+#/tab/mine";
//         $scope.football='发布一个特别的活动';
//         //$scope.items = ['Item 1', 'Item 2', 'Item 3'];
//         $scope.doRefresh = function() {
//             // $scope.items = ['Item 1', 'Item 2', 'Item 3'];
//             //  $scope.$broadcast('scroll.refreshComplete');
//             console.log('Refreshing!');
//             $timeout( function() {
                
//                 $scope.items.push('新型教育系统');
//                 $scope.items.push('新型教育系统');
//                 // $scope.items.push('New Item ' + Math.floor(Math.random() * 1000) + 4);
//                 // $scope.items.push('New Item ' + Math.floor(Math.random() * 1000) + 4);
//                 // $scope.items.push('New Item ' + Math.floor(Math.random() * 1000) + 4);

//         //Stop the ion-refresher from spinning
//             $scope.$broadcast('scroll.refreshComplete');
        
//             }, 1000);

//         };
//         $scope.$on('$ionicView.afterEnter', function() {
//             if (pages.indexOf(location.hash) > -1) {
//                 var tabs =document.getElementsByTagName('ion-tabs');
//                 angular.element(tabs).removeClass("tabs-item-hide");
//             }
//         });
//         $scope.$on('$ionicView.beforeLeave', function() {
//             if (pages.indexOf(location.hash) > -1) return;
//             var tabs =document.getElementsByTagName('ion-tabs');
//             angular.element(tabs).addClass("tabs-item-hide");
//         });


    

//     });
// });
    
app.controller('messageCtrl', function($scope, $timeout) {
    var pages = "#/tab/home+#/tab/message+#/tab/add+#/tab/friend+#/tab/mine";
    $scope.items = [];

    $scope.doRefresh = function() {

        console.log('Refreshing!');
        $timeout( function() {
            var i=Math.floor(Math.random() * 5);
            var list=['新型教育系统','上课内容','下课作业','学堂测试','课前预习'];
            $scope.items.push(list[i]);
           // .item.addClass('href="#/tab/activitymsg"');
        // $scope.items.push('New Item ' + Math.floor(Math.random() * 1000) + 4);
        // $scope.items.push('New Item ' + Math.floor(Math.random() * 1000) + 4);
        // $scope.items.push('New Item ' + Math.floor(Math.random() * 1000) + 4);
        // $scope.items.push('New Item ' + Math.floor(Math.random() * 1000) + 4);
        // Stop the ion-refresher from spinning
        $scope.$broadcast('scroll.refreshComplete');
        
    }, 1000);
        
    };
    
    $scope.edit = function(item) {
        // alert('删除'+item);
        $scope.items.pop(item);
    };
    // $scope.$on('$ionicView.afterEnter', function() {
    //     if (pages.indexOf(location.hash) > -1) {
    //         var tabs =document.getElementsByTagName('ion-tabs');
    //         angular.element(tabs).removeClass("tabs-item-hide");
    //     }
    // });
    // $scope.$on('$ionicView.beforeLeave', function() {
    //     if (pages.indexOf(location.hash) > -1) return;
    //     var tabs =document.getElementsByTagName('ion-tabs');
    //     angular.element(tabs).addClass("tabs-item-hide");
    // });

});
});