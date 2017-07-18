import { Component } from '@angular/core';
import {jqxChartComponent} from 'jqwidgets/angular_jqxChart';

@Component({
    selector: 'area-graph',
    template:  `<jqxChart
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
export class AreaGraphComponent {
    borderLine: any = 16;

    padding:any = {left: 20, top: 10, right: 20, bottom: 10 };

    sampleData = [
        { Day: '14/11', voltage: 14  },
        { Day: '15/11', voltage: 17 },
        { Day: '16/11', voltage: 17 },
        { Day: '18/11', voltage: 16 },
        { Day: '19/11', voltage: 18 },
        { Day: '20/11', voltage: 15 },
        { Day: '21/11', voltage: 15 }
    ];

    title: string = 'U.S. Stock Market Index Performance';

    description: string = 'NASDAQ Composite compared to S&P 500';

    valueAxis: any =
        {
            unitInterval: 2,
            minValue: 12,
            maxValue: 18,
            displayValueAxis: false,
            showTickMarks: false,
            axisSize: 'auto',
            labels:{class:'axis-label'}
        }
    xAxis: any =
        {
            dataField: 'Day',
            showTickMarks: false,
            labels:{class:'axis-label'},
            unitInterval: 1,
            gridLinesColor: '#bdbdbd',
            gridLines : {
                interval: 6
            },
        }

    seriesGroups: any[] =
        [
            {
                type: 'area',
                showLegend: false,
                seriesGapPercent: 5,
                useGradient: false,
                series: [
                    { dataField: 'voltage',
                        opacity:'0.4',
                        symbolType: 'circle',
                        colorFunction: (value, itemIndex, serie, group) => {
                            return (value > this.borderLine) ? '#E43A45'  : '#00bcd4'
                        }
                    }
                ]
            }
        ];s

}