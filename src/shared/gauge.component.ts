/// <reference path="jqwidgets.d.ts" />
import {Component, ViewChild, AfterViewInit, Input} from '@angular/core';
import {jqxGaugeComponent} from 'jqwidgets/angular_jqxgauge';
import {mqttService} from './mqtt.service';

@Component({
    selector: 'gauge',
    templateUrl: '/app/views/gauge.html',
    providers:[mqttService],
    styleUrls: ['./dist/style.css']
})

export class GaugeComponent implements AfterViewInit {

    @ViewChild('gaugeReference') myGauge: jqxGaugeComponent;

    ngAfterViewInit(): void {
        setTimeout(() => {
            let subscribe = this.mqtt.mes.subscribe((value) => {
                console.log(value);
                this.myGauge.value(value);
            });
        });

    }

    constructor(private mqtt:mqttService) {

    }

    gaugeOnValueChanging(event: any): void {
        let gaugeValueDom = <HTMLElement>document.getElementById('gaugeValue');
        gaugeValueDom.innerText = Math.round(event.args.value)+'';
    }
    @Input() gaugeValue: number;


    change(event):void{
        this.myGauge.value = event;
    }
    pointer: any = {
        pointerType: 'rectangle',
        length: '85%',
        style: {
            fill: 'rgb(58,65,88)',
            stroke: 'rgb(58,65,88)'
        }
    };

    border: any = {
        visible: false
    };

    labels: any = {
        distance: 40,
        interval: 10,
        style: {
            fill: '#fff',
            stroke:'#fff',
        },
        visible: true
    };
    ticksMinor: any = {visible: false};

    ticksMajor: any = {visible: false};

    ranges: any[] =
        [
            {startValue: 190, endValue: 199, style: {fill: '#fff', stroke: '#fff'}, endWidth: 5, startWidth: 5},
            {
                startValue: 200,
                endValue: 209,
                style: {fill: 'rgb(228,58,69)', stroke: 'rgb(228,58,69)'},
                endWidth: 5,
                startWidth: 5
            },
            {
                startValue: 210,
                endValue: 219,
                style: {fill: 'rgb(253,216,53)', stroke: 'rgb(253,216,53)'},
                endWidth: 5,
                startWidth: 5
            },
            {
                startValue: 220,
                endValue: 229,
                style: {fill: 'rgb(0, 181, 144)', stroke: 'rgb(0, 181, 144)'},
                endWidth: 5,
                startWidth: 5
            },
            {
                startValue: 230,
                endValue: 239,
                style: {fill: 'rgb(0, 181, 144)', stroke: 'rgb(0, 181, 144)'},
                endWidth: 5,
                startWidth: 5
            },
            {
                startValue: 240,
                endValue: 249,
                style: {fill: 'rgb(253,216,53)', stroke: 'rgb(253,216,53)'},
                endWidth: 5,
                startWidth: 5
            },
            {
                startValue: 250,
                endValue: 260,
                style: {fill: 'rgb(228,58,69)', stroke: 'rgb(228,58,69)'},
                endWidth: 5,
                startWidth: 5
            }
        ];
}