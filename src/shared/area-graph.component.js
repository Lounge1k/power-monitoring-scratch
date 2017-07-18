"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AreaGraphComponent = (function () {
    function AreaGraphComponent() {
        var _this = this;
        this.borderLine = 16;
        this.padding = { left: 20, top: 10, right: 20, bottom: 10 };
        this.sampleData = [
            { Day: '14/11', voltage: 14 },
            { Day: '15/11', voltage: 17 },
            { Day: '16/11', voltage: 17 },
            { Day: '18/11', voltage: 16 },
            { Day: '19/11', voltage: 18 },
            { Day: '20/11', voltage: 15 },
            { Day: '21/11', voltage: 15 }
        ];
        this.title = 'U.S. Stock Market Index Performance';
        this.description = 'NASDAQ Composite compared to S&P 500';
        this.valueAxis = {
            unitInterval: 2,
            minValue: 12,
            maxValue: 18,
            displayValueAxis: false,
            showTickMarks: false,
            axisSize: 'auto',
            labels: { class: 'axis-label' }
        };
        this.xAxis = {
            dataField: 'Day',
            showTickMarks: false,
            labels: { class: 'axis-label' },
            unitInterval: 1,
            gridLinesColor: '#bdbdbd',
            gridLines: {
                interval: 6
            },
        };
        this.seriesGroups = [
            {
                type: 'area',
                showLegend: false,
                seriesGapPercent: 5,
                useGradient: false,
                series: [
                    { dataField: 'voltage',
                        opacity: '0.4',
                        symbolType: 'circle',
                        colorFunction: function (value, itemIndex, serie, group) {
                            return (value > _this.borderLine) ? '#E43A45' : '#00bcd4';
                        }
                    }
                ]
            }
        ];
    }
    return AreaGraphComponent;
}());
AreaGraphComponent = __decorate([
    core_1.Component({
        selector: 'area-graph',
        template: "<jqxChart\n        [width]='850'\n        [height]='500'\n        [title]='title'\n        [description]='description'\n        [xAxis]='xAxis'\n        [valueAxis]='valueAxis'\n        [seriesGroups]='seriesGroups'\n        [source]='sampleData'\n        [padding]=\"padding\"\n        ></jqxChart>"
    })
], AreaGraphComponent);
exports.AreaGraphComponent = AreaGraphComponent;
//# sourceMappingURL=area-graph.component.js.map