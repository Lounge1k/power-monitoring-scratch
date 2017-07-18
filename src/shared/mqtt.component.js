"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var mqttws31_1 = require("mqttws31");
var mqtt = (function () {
    function mqtt() {
        this.message = {};
    }
    mqtt.prototype.ngOnInit = function () {
        var _this = this;
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
    };
    mqtt.prototype.onConnected = function () {
        console.log('Connected to broker.');
        this._client.subscribe('sdf654sdf/#');
    };
    return mqtt;
}());
mqtt = __decorate([
    core_1.Component({
        selector: 'mqtt',
        template: "\n        <h1>message : {{message }}</h1>\n    "
    })
], mqtt);
exports.mqtt = mqtt;
//# sourceMappingURL=mqtt.component.js.map