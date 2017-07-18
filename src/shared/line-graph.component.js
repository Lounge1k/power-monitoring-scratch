"use strict";
/// <reference path="jqwidgets.d.ts" />
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var LineGraphComponent = (function () {
    function LineGraphComponent() {
        this.borderLine = 16;
        this.padding = { left: 20, top: 10, right: 20, bottom: 10 };
        this.sampleData = [
            { Day: '14/11', voltage: 14 },
            { Day: '15/11', voltage: 15 },
            { Day: '16/11', voltage: 16 },
            { Day: '18/11', voltage: 15 },
            { Day: '19/11', voltage: 15 },
            { Day: '20/11', voltage: 15 },
            { Day: '21/11', voltage: 15 }
        ];
        this.title = 'U.S. Stock Market Index Performance';
        this.description = 'NASDAQ Composite compared to S&P 500';
        this.seriesGroups = [
            {
                type: 'line',
                showLegend: false,
                seriesGapPercent: 0,
                useGradient: false,
                valueAxis: {
                    unitInterval: 2,
                    minValue: 12,
                    maxValue: 18,
                    displayValueAxis: false,
                    showTickMarks: false,
                    axisSize: 'auto',
                    labels: { class: 'axis-label' }
                },
                xAxis: {
                    dataField: 'Day',
                    showTickMarks: false,
                    labels: { class: 'axis-label' },
                    unitInterval: 1,
                    gridLinesColor: '#bdbdbd',
                    gridLines: {
                        interval: 6
                    },
                },
                series: [
                    { dataField: 'voltage', lineColor: '#00B590' }
                ],
                bands: [
                    {
                        minValue: this.borderLine,
                        maxValue: this.borderLine,
                        lineWidth: 3,
                        color: '#C7C7C7',
                        dashStyle: '10'
                    }
                ]
            }
        ];
    }
    return LineGraphComponent;
}());
LineGraphComponent = __decorate([
    core_1.Component({
        selector: 'line-graph',
        template: "\n        <jqxChart \n                [width]='850'\n                  [height]='500'\n                  [title]='title'\n                  [description]='description'\n                  [xAxis]='xAxis'\n                  [valueAxis]='valueAxis'\n                  [seriesGroups]='seriesGroups'\n                  [source]='sampleData'\n                  [padding]=\"padding\"\n        ></jqxChart>"
    })
], LineGraphComponent);
exports.LineGraphComponent = LineGraphComponent;
//# sourceMappingURL=line-graph.component.js.map