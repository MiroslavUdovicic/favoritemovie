webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_data_service__ = __webpack_require__("./src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_movies_movies_component__ = __webpack_require__("./src/app/components/movies/movies.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_show_show_component__ = __webpack_require__("./src/app/components/show/show.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_6__components_movies_movies_component__["a" /* MoviesComponent */] },
    { path: 'show/:id', component: __WEBPACK_IMPORTED_MODULE_7__components_show_show_component__["a" /* ShowComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_movies_movies_component__["a" /* MoviesComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_show_show_component__["a" /* ShowComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */].forRoot(appRoutes)
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__services_data_service__["a" /* DataService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/movies/movies.component.css":
/***/ (function(module, exports) {

module.exports = ".main {\r\n  height: 65vh;\r\n  background-image: url('main.d3a1c0bcde3a053be879.jpg');\r\n  background-size: cover;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  margin-bottom: 40px;\r\n}\r\n\r\n.headings {\r\n  margin-left: 150px;\r\n  padding: 40px;\r\n  width: 40%;\r\n  background: rgba(0, 0, 0, 0.5);\r\n  -webkit-animation: zoomin 1s ease-out forwards;\r\n          animation: zoomin 1s ease-out forwards;\r\n}\r\n\r\n@-webkit-keyframes zoomin{\r\n  0%{\r\n    -webkit-transform: scale(0);\r\n            transform: scale(0);\r\n  }\r\n  100%{\r\n    -webkit-transform: scale(1);\r\n            transform: scale(1);\r\n  }\r\n}\r\n\r\n@keyframes zoomin{\r\n  0%{\r\n    -webkit-transform: scale(0);\r\n            transform: scale(0);\r\n  }\r\n  100%{\r\n    -webkit-transform: scale(1);\r\n            transform: scale(1);\r\n  }\r\n}\r\n\r\nh1 {\r\n  font-size: 3em;\r\n}\r\n\r\n.movies-container {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-wrap: wrap;\r\n      flex-wrap: wrap;\r\n  padding: 0 50px;\r\n}\r\n\r\nfigure{\r\n  padding: 20px 30px;\r\n  -webkit-box-flex: 0;\r\n      -ms-flex: 0 0 25%;\r\n          flex: 0 0 25%;\r\n  text-align: center;\r\n  position: relative;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n}\r\n\r\nfigure img{\r\n  border-radius: 8px;\r\n  opacity: 1;\r\n  display: block;\r\n  width: 100%;\r\n  -webkit-transition: .5s ease;\r\n  transition: .5s ease;\r\n  -webkit-backface-visibility: hidden;\r\n          backface-visibility: hidden;\r\n}\r\n\r\n.middle {\r\n  -webkit-transition: .5s ease;\r\n  transition: .5s ease;\r\n  opacity: 0;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n  -ms-transform: translate(-50%, -50%);\r\n  text-align: center;\r\n}\r\n\r\nfigure:hover img {\r\n  opacity: 0.3;\r\n}\r\n\r\nfigure:hover .middle {\r\n  opacity: 1;\r\n}\r\n\r\n.text {\r\n  background-color: firebrick;\r\n  color: white;\r\n  font-size: 16px;\r\n  padding: 16px 32px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/movies/movies.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\r\n  <div class=\"headings\">\r\n    <h1>Favorite Movies</h1>\r\n    <p>Check out some of the most awesome movies, certainly my favorites, loaded from custom made API!</p>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"movies-container\">\r\n  <figure *ngFor=\"let movie of movies\">\r\n    <img src=\"{{movie.poster}}\" alt=\"\">\r\n    <div class=\"middle\">\r\n      <div class=\"text\"><a [routerLink]=\"['/show/', movie._id]\">See More</a></div>\r\n    </div>\r\n    <figcaption>{{movie.title}} <br> {{movie.released}}</figcaption>\r\n  </figure>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/movies/movies.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoviesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("./src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MoviesComponent = /** @class */ (function () {
    function MoviesComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
    }
    MoviesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getMovies().subscribe(function (movies) {
            _this.movies = movies;
        });
    };
    MoviesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-movies',
            template: __webpack_require__("./src/app/components/movies/movies.component.html"),
            styles: [__webpack_require__("./src/app/components/movies/movies.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], MoviesComponent);
    return MoviesComponent;
}());



/***/ }),

/***/ "./src/app/components/show/show.component.css":
/***/ (function(module, exports) {

module.exports = ".movie-wrapper{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  padding: 100px;\r\n}\r\n.movie-info{\r\n  padding: 0 40px;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n}\r\nbutton{\r\n  background: firebrick;\r\n  border: none;\r\n  color: #fff;\r\n  padding: 15px;\r\n  float: right;\r\n  margin-right: 100px;\r\n  cursor: pointer;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/show/show.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"movie-wrapper\">\n  <img src=\"{{movie?.poster}}\" alt=\"\">\n  <div class=\"movie-info\">\n    <div>\n      <h1>{{movie?.title}}</h1>\n      <p>{{movie?.released}}</p>\n      <p>{{movie?.genre}}</p>\n    </div>\n    <p>{{movie?.plot}}</p>\n    <div>\n      <p><em>Actors:</em>&nbsp;&nbsp; <strong>{{movie?.actors}}</strong></p>\n      <p><em>Directed by:</em>&nbsp;&nbsp; <strong>{{movie?.director}}</strong></p>\n      <p><em>IMDb Rating:</em>&nbsp;&nbsp; <strong>{{movie?.rating}}</strong></p>\n    </div>\n  </div>\n</div>\n\n<button [routerLink]=\"['/']\">Go Back</button>\n"

/***/ }),

/***/ "./src/app/components/show/show.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("./src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ShowComponent = /** @class */ (function () {
    function ShowComponent(dataService, router, activatedRoute) {
        this.dataService = dataService;
        this.router = router;
        this.activatedRoute = activatedRoute;
    }
    ShowComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUrl = this.activatedRoute.snapshot.params;
        this.dataService.getSingleMovie(this.currentUrl.id).subscribe(function (data) {
            _this.movie = data;
        });
    };
    ShowComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-show',
            template: __webpack_require__("./src/app/components/show/show.component.html"),
            styles: [__webpack_require__("./src/app/components/show/show.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], ShowComponent);
    return ShowComponent;
}());



/***/ }),

/***/ "./src/app/services/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
    }
    DataService.prototype.getMovies = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.get("api/movies", { headers: headers })
            .map(function (res) { return res.json(); });
    };
    DataService.prototype.getSingleMovie = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.get("api/movies/" + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map