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
var mqttws31_1 = require("mqttws31");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var mqttService = (function () {
    function mqttService() {
        var _this = this;
        this.mes = new BehaviorSubject_1.BehaviorSubject(190);
        setTimeout(function () { _this.mes.next(235); }, 4000);
        setTimeout(function () { _this.mes.next(240); }, 8000);
        setTimeout(function () { _this.mes.next(245); }, 12000);
        this._client = new mqttws31_1.Paho.MQTT.Client("iot.eclipse.org", Number(80), '/ws', "myclientid_");
        console.log(this._client);
        this._client.onConnectionLost = function (responseObject) {
            console.log(responseObject);
            console.log('Connection lost.');
        };
        this._client.onMessageArrived = function (message) {
            console.log('Message arrived.');
            var mes = message.payloadString;
            console.log(mes);
            if (mes !== 'offline') {
                mes = JSON.parse(message.payloadString);
                for (var i in mes)
                    _this.message[i] = mes[i];
                console.log(_this.message);
            }
            else {
                console.log('MQTT is offline');
            }
        };
        this._client.connect({ onSuccess: this.onConnected.bind(this) });
    }
    mqttService.prototype.onConnected = function () {
        console.log('Connected to broker.');
        this._client.subscribe('sdf654sdf/#');
    };
    return mqttService;
}());
mqttService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], mqttService);
exports.mqttService = mqttService;
//# sourceMappingURL=mqtt.service.js.map