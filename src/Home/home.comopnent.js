"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var data_1 = require("./data");
var request_service_1 = require("../shared/services/request.service");
var moment = require("moment");
var HomeComponent = (function () {
    function HomeComponent(requestService) {
        this.requestService = requestService;
        this.deviceStatus = data_1.devicesStatus;
        this.todayMes = [];
        this.yestMes = [];
        this.olderMes = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        //this.parseMessages(this.messages);
        this.getData();
    };
    HomeComponent.prototype.parseMessages = function (arr) {
        var today = moment().startOf('day');
        for (var i = 0; i < arr.length; i++) {
            var date = moment(arr[i].date).startOf('day');
            arr[i].foramted = date.format('MM-DD');
            arr[i].showSettings = false;
            switch (today.diff(date, 'days') + 1) {
                case 1: {
                    this.todayMes.push(arr[i]);
                    break;
                }
                case 2: {
                    this.yestMes.push(arr[i]);
                    break;
                }
                default: {
                    this.olderMes.push(arr[i]);
                    break;
                }
            }
        }
    };
    HomeComponent.prototype.getData = function () {
        var _this = this;
        this.requestService.getData('homedata.json')
            .subscribe(function (response) {
            _this.messages = response;
            _this.parseMessages(_this.messages);
        }, function (error) { return _this.errorMessage = error; });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: 'main-view',
        templateUrl: './home/home.component.html',
        styleUrls: ['./home/home.component.css']
    }),
    __metadata("design:paramtypes", [request_service_1.RequestService])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.comopnent.js.map