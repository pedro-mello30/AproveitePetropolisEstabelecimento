(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["estabelecimento-estabelecimentos-form-estabelecimentos-form-module"],{

/***/ "Olgc":
/*!************************************************!*\
  !*** ./src/app/core/services/toast.service.ts ***!
  \************************************************/
/*! exports provided: ToastService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastService", function() { return ToastService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");



let ToastService = class ToastService {
    constructor(toast) {
        this.toast = toast;
    }
    showSuccess(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // //forma sem o async
            // return this.toast.create({
            //   message: message,
            //   duration: 2000;
            //   color: 'success',
            //   position: 'bottom'
            // }).then(toastResult => {
            //   toastResult.present();
            // });
            const toastResult = yield this.toast.create({
                message: message,
                duration: 2000,
                color: 'success',
                position: 'bottom'
            });
            toastResult.present();
        });
    }
    showError(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toastResult = yield this.toast.create({
                message: message,
                duration: 2000,
                color: 'danger',
                position: 'bottom'
            });
            toastResult.present();
        });
    }
};
ToastService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] }
];
ToastService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ToastService);



/***/ })

}]);
//# sourceMappingURL=estabelecimento-estabelecimentos-form-estabelecimentos-form-module.js.map