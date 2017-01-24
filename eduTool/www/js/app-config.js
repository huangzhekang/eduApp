define(['app'], function(app){
    app
    //   .config(['$ionicConfigProvider','$sceDelegateProvider', function($ionicConfigProvider,$sceDelegateProvider) {
    //       $ionicConfigProvider.tabs.position('bottom'); // other values: top
    //       $ionicConfigProvider.platform.android.views.maxCache(5); //安卓缓存5个view，ios默认10个
    //       $ionicConfigProvider.tabs.style('standard');
          
    //       $sceDelegateProvider.resourceUrlWhitelist([
    //         // Allow same origin resource loads.
    //         'self',
    //         // Allow loading from our assets domain.  Notice the difference between * and **.
    //         'http://srv*.assets.example.com/**'
    //       ]);
          
    //       /*    // The blacklist overrides the whitelist so the open redirect here is blocked.
    //       *    $sceDelegateProvider.resourceUrlBlacklist([
    //       *      'http://myapp.example.com/clickThru**'
    //       *    ]);
    //       */
    //        $ionicConfigProvider.views.transition('no');//新增设置路由解决卡顿
    //       $ionicNativeTransitionsProvider.setDefaultOptions({  
    //           duration: 400, // in milliseconds (ms), default 400,  
    //           slowdownfactor: 4, // overlap views (higher number is more) or no overlap (1), default 4  
    //           iosdelay: -1, // ms to wait for the iOS webview to update before animation kicks in, default -1  
    //           androiddelay: -1, // same as above but for Android, default -1  
    //           winphonedelay: -1, // same as above but for Windows Phone, default -1,  
    //           fixedPixelsTop: 0, // the number of pixels of your fixed header, default 0 (iOS and Android)  
    //           fixedPixelsBottom: 0, // the number of pixels of your fixed footer (f.i. a tab bar), default 0 (iOS and Android)  
    //           triggerTransitionEvent: '$ionicView.afterEnter', // internal ionic-native-transitions option  
    //           backInOppositeDirection: false // Takes over default back transition and state back transition to use the opposite direction transition to go back  
    //       });  

    //   }])
.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider,$httpProvider) {  
          $ionicConfigProvider.tabs.position('bottom'); // other values: top
          $ionicConfigProvider.platform.android.views.maxCache(5); //安卓缓存5个view，ios默认10个
          $ionicConfigProvider.tabs.style('standard');
          $ionicConfigProvider.views.transition('no');//新增设置路由解决卡顿

    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';  
     // var param = function(obj) {  
     //   var query = '', name, value, fullSubName, subName, subValue, innerObj, i;  
     //        for(name in obj) {  
     //            value = obj[name];  
  
     //            if(value instanceof Array) {  
     //                for(i=0; i<value.length; ++i) {  
     //                    subValue = value[i];  
     //                    fullSubName = name + '[' + i + ']';  
     //                    innerObj = {};  
     //                    innerObj[fullSubName] = subValue;  
     //                    query += param(innerObj) + '&';  
     //                }  
     //            }  
     //            else if(value instanceof Object) {  
     //                for(subName in value) {  
     //                    subValue = value[subName];  
     //                    fullSubName = name + '[' + subName + ']';  
     //                    innerObj = {};  
     //                    innerObj[fullSubName] = subValue;  
     //                    query += param(innerObj) + '&';  
     //                }  
     //            }  
     //            else if(value !== undefined && value !== null)  
     //                query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';  
     //        }  
     //        return query.length ? query.substr(0, query.length - 1) : query;  
     //    };  
  
     //    // Override $http service's default transformRequest  
     //    $httpProvider.defaults.transformRequest = [function(data) {  
     //        return angular.isObject(data) && String(data) !== '[object File]' ? param(data) : data;  
     //    }];  
})  


      .run(function($ionicPlatform) {
          $ionicPlatform.ready(function() {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
              cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
              cordova.plugins.Keyboard.disableScroll(true);

            }
            if (window.StatusBar) {
              // org.apache.cordova.statusbar required
              StatusBar.styleLightContent();
            }
          });


        });
});
