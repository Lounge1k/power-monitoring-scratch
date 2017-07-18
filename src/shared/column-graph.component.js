"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ColumnGraphComponent = (function () {
    function ColumnGraphComponent() {
        var _this = this;
        this.borderLine = 16;
        this.sampleData = [
            { Day: '15:15', Keith: 14 },
            { Day: '15:30', Keith: 15 },
            { Day: '15:45', Keith: 15.5 },
            { Day: '16:00', Keith: 14.5 },
            { Day: '16:15', Keith: 15.6 },
            { Day: '16:30', Keith: 16 },
            { Day: '16:45', Keith: 17 },
            { Day: '17:00', Keith: 15.5 },
            { Day: '17:15', Keith: 14.5 },
            { Day: '17:30', Keith: 14 },
            { Day: '17:45', Keith: 13 },
            { Day: '18:00', Keith: 13.7 },
            { Day: '18:15', Keith: 13 },
            { Day: '18:30', Keith: 17 }
        ];
        this.title = "Fitness & exercise weekly scorecard";
        this.description = "Time spent in vigorous exercise";
        this.padding = { left: 20, top: 10, right: 20, bottom: 10 };
        this.seriesGroups = [
            {
                type: 'column',
                columnsGapPercent: 5,
                seriesGapPercent: 0,
                showLegend: false,
                useGradient: false,
                valueAxis: {
                    showTickMarks: false,
                    unitInterval: 2,
                    minValue: 12,
                    maxValue: 18,
                    displayValueAxis: false,
                    gridLinesColor: '#bdbdbd',
                    labels: { class: 'axis-label' },
                    valuesOnTicks: true
                },
                xAxis: {
                    dataField: 'Day',
                    showGridLines: true,
                    showTickMarks: false,
                    labels: { step: 4, class: 'axis-label' },
                    unitInterval: 1,
                    gridLinesColor: '#bdbdbd',
                    valuesOnTicks: true,
                    gridLines: {
                        interval: 14
                    },
                },
                series: [
                    {
                        dataField: 'Keith',
                        displayText: 'Keith',
                        colorFunction: function (value, itemIndex, serie, group) {
                            return (value > _this.borderLine) ? '#E43A45' : '#00B590';
                        }
                    },
                ],
                bands: [
                    {
                        minValue: this.borderLine,
                        maxValue: this.borderLine,
                        lineWidth: 3,
                        color: '#C7C7C7',
                        dashStyle: '10,5'
                    }
                ]
            }
        ];
    }
    return ColumnGraphComponent;
}());
ColumnGraphComponent = __decorate([
    core_1.Component({
        selector: 'column-graph',
        template: "\n        <jqxChart [width]='600'\n                  [height]='500'\n                  [title]='title'\n                  [description]='description'\n                  [enableAnimations]='true'\n                  [source]='sampleData'\n                  [padding]=\"padding\"\n                  [seriesGroups]='seriesGroups'>\n        </jqxChart>"
    })
], ColumnGraphComponent);
exports.ColumnGraphComponent = ColumnGraphComponent;
//# sourceMappingURL=column-graph.component.js.map