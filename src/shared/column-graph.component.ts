import {Component} from '@angular/core';
import {jqxChartComponent} from 'jqwidgets/angular_jqxChart';
@Component({
    selector: 'column-graph',
    template: `
        <jqxChart [width]='600'
                  [height]='500'
                  [title]='title'
                  [description]='description'
                  [enableAnimations]='true'
                  [source]='sampleData'
                  [padding]="padding"
                  [seriesGroups]='seriesGroups'>
        </jqxChart>`
})
export class ColumnGraphComponent {

    borderLine: number = 16;

    sampleData = [
        {Day: '15:15', Keith: 14 },
        {Day: '15:30', Keith: 15},
        {Day: '15:45', Keith: 15.5 },
        {Day: '16:00', Keith: 14.5},
        {Day: '16:15', Keith: 15.6 },
        {Day: '16:30', Keith: 16 },
        {Day: '16:45', Keith: 17},
        {Day: '17:00', Keith: 15.5},
        {Day: '17:15', Keith: 14.5},
        {Day: '17:30', Keith: 14},
        {Day: '17:45', Keith: 13},
        {Day: '18:00', Keith: 13.7},
        {Day: '18:15', Keith: 13},
        {Day: '18:30', Keith: 17}
    ];

    title: string = "Fitness & exercise weekly scorecard";
    description: string = "Time spent in vigorous exercise";
    padding:any = {left: 20, top: 10, right: 20, bottom: 10 };

    seriesGroups: any[] =
        [
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
                    labels:{class:'axis-label'},
                    valuesOnTicks: true
                },
                xAxis:
                    {
                        dataField: 'Day',
                        showGridLines: true,
                        showTickMarks: false,
                        labels:{step: 4,class:'axis-label'},
                        unitInterval: 1,
                        gridLinesColor: '#bdbdbd',
                        valuesOnTicks: true,
                        gridLines : {
                            interval: 14
                        },
                    },
                series: [
                    {
                        dataField: 'Keith',
                        displayText: 'Keith',
                        colorFunction: (value, itemIndex, serie, group) => {
                            return (value > this.borderLine) ? '#E43A45'  : '#00B590'
                        }
                    },
                ],
                bands : [
                    {
                        minValue:  this.borderLine,
                        maxValue:  this.borderLine,
                        lineWidth: 3,
                        color: '#C7C7C7',
                        dashStyle: '10,5'
                    }
                ]
            }
        ];

}