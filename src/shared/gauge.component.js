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
/// <reference path="jqwidgets.d.ts" />
var core_1 = require("@angular/core");
var angular_jqxgauge_1 = require("jqwidgets/angular_jqxgauge");
var mqtt_service_1 = require("./mqtt.service");
var GaugeComponent = (function () {
    function GaugeComponent(mqtt) {
        this.mqtt = mqtt;
        this.pointer = {
            pointerType: 'rectangle',
            length: '85%',
            style: {
                fill: 'rgb(58,65,88)',
                stroke: 'rgb(58,65,88)'
            }
        };
        this.border = {
            visible: false
        };
        this.labels = {
            distance: 40,
            interval: 10,
            style: {
                fill: '#fff',
                stroke: '#fff',
            },
            visible: true
        };
        this.ticksMinor = { visible: false };
        this.ticksMajor = { visible: false };
        this.ranges = [
            { startValue: 190, endValue: 199, style: { fill: '#fff', stroke: '#fff' }, endWidth: 5, startWidth: 5 },
            {
                startValue: 200,
                endValue: 209,
                style: { fill: 'rgb(228,58,69)', stroke: 'rgb(228,58,69)' },
                endWidth: 5,
                startWidth: 5
            },
            {
                startValue: 210,
                endValue: 219,
                style: { fill: 'rgb(253,216,53)', stroke: 'rgb(253,216,53)' },
                endWidth: 5,
                startWidth: 5
            },
            {
                startValue: 220,
                endValue: 229,
                style: { fill: 'rgb(0, 181, 144)', stroke: 'rgb(0, 181, 144)' },
                endWidth: 5,
                startWidth: 5
            },
            {
                startValue: 230,
                endValue: 239,
                style: { fill: 'rgb(0, 181, 144)', stroke: 'rgb(0, 181, 144)' },
                endWidth: 5,
                startWidth: 5
            },
            {
                startValue: 240,
                endValue: 249,
                style: { fill: 'rgb(253,216,53)', stroke: 'rgb(253,216,53)' },
                endWidth: 5,
                startWidth: 5
            },
            {
                startValue: 250,
                endValue: 260,
                style: { fill: 'rgb(228,58,69)', stroke: 'rgb(228,58,69)' },
                endWidth: 5,
                startWidth: 5
            }
        ];
    }
    GaugeComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            var subscribe = _this.mqtt.mes.subscribe(function (value) {
                console.log(value);
                _this.myGauge.value(value);
            });
        });
    };
    GaugeComponent.prototype.gaugeOnValueChanging = function (event) {
        var gaugeValueDom = document.getElementById('gaugeValue');
        gaugeValueDom.innerText = Math.round(event.args.value) + '';
    };
    GaugeComponent.prototype.change = function (event) {
        this.myGauge.value = event;
    };
    return GaugeComponent;
}());
__decorate([
    core_1.ViewChild('gaugeReference'),
    __metadata("design:type", typeof (_a = typeof angular_jqxgauge_1.jqxGaugeComponent !== "undefined" && angular_jqxgauge_1.jqxGaugeComponent) === "function" && _a || Object)
], GaugeComponent.prototype, "myGauge", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], GaugeComponent.prototype, "gaugeValue", void 0);
GaugeComponent = __decorate([
    core_1.Component({
        selector: 'gauge',
        templateUrl: '/app/views/gauge.html',
        providers: [mqtt_service_1.mqttService],
        styleUrls: ['./dist/style.css']
    }),
    __metadata("design:paramtypes", [mqtt_service_1.mqttService])
], GaugeComponent);
exports.GaugeComponent = GaugeComponent;
var _a;
//# sourceMappingURL=gauge.component.js.map