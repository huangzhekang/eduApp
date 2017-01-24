/*模块的加载，改变基目录（baseUrl） 加载非规范的模块shim，exports值（输出的变量名），表明这个模块外部调用时的名称，deps数组，表明该模块的依赖性*/
require.config({
    baseUrl: './',
    paths: {
        'app': 'js/app',
        'appConfig':'js/app-config',
        'routes': 'js/routes',
        'ionic': 'lib/ionic/js/ionic.bundle',
        'ngcordova': 'lib/ngCordova/dist/ng-cordova',
        'bootstrap':'js/bootstrap',
        'zepto':'lib/zepto/zepto.min',
        'asyncLoader': 'lib/async-loader/angular-async-loader',
        'hammer' : 'js/hammer',
        'imgDirective': 'js/img-directive',
        'imgService':'js/img-service'
    },
    shim: {
        'app': {
            deps: ['ionic']
        },
        'routes': {
            deps: ['ionic','app']
        },
        'appConfig':{
            deps: ['app']
        },
        'imgDirective':{
            deps: ['ionic'],
            exports : 'ng-img'
        },
        'imgService':{
            deps: ['ionic'],
            exports : 'actionImgShow'
        },
        'hammer' : {exports : 'hammer'},
        'ionic' : {exports : 'ionic'},
    },
    priority: [
        'ionic',
        'ngcordova',
        'app',
        'routes',
        'appConfig',
        'hammer',
        'imgDirective',
        'imgService'
    ],
    deps: [
        'bootstrap'
    ]
});