/// <reference path="jqwidgets.d.ts" />

import {Component, AfterViewInit} from '@angular/core';
import {jqxChartComponent} from 'jqwidgets/angular_jqxChart'

@Component({
    selector: 'line-graph',
    template: `
        <jqxChart 
                [width]='850'
                  [height]='500'
                  [title]='title'
                  [description]='description'
                  [xAxis]='xAxis'
                  [valueAxis]='valueAxis'
                  [seriesGroups]='seriesGroups'
                  [source]='sampleData'
                  [padding]="padding"
        ></jqxChart>`
})
export class LineGraphComponent {
    borderLine: any = 16;

    padding:any = {left: 20, top: 10, right: 20, bottom: 10 };

    sampleData = [
        { Day: '14/11', voltage: 14  },
        { Day: '15/11', voltage: 15 },
        { Day: '16/11', voltage: 16 },
        { Day: '18/11', voltage: 15 },
        { Day: '19/11', voltage: 15 },
        { Day: '20/11', voltage: 15 },
        { Day: '21/11', voltage: 15 }
    ];

    title: string = 'U.S. Stock Market Index Performance';

    description: string = 'NASDAQ Composite compared to S&P 500';

    seriesGroups: any[] =
        [
            {
                type: 'line',
                showLegend: false,
                seriesGapPercent: 0,
                useGradient: false,
                valueAxis:
                    {
                        unitInterval: 2,
                        minValue: 12,
                        maxValue: 18,
                        displayValueAxis: false,
                        showTickMarks: false,
                        axisSize: 'auto',
                        labels:{class:'axis-label'}
                    },
                xAxis:
                    {
                        dataField: 'Day',
                        showTickMarks: false,
                        labels:{class:'axis-label'},
                        unitInterval: 1,
                        gridLinesColor: '#bdbdbd',
                        gridLines : {
                            interval: 6
                        },
                    },
                series: [
                    { dataField: 'voltage',lineColor : '#00B590'}
                ],
                bands : [
                    {
                        minValue:  this.borderLine,
                        maxValue:  this.borderLine,
                        lineWidth: 3,
                        color: '#C7C7C7',
                        dashStyle: '10'
                    }
                ]
            }
        ];

}