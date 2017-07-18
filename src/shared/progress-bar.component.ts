import {Component, OnInit, ViewChild} from '@angular/core';
import {jqxProgressBarComponent} from 'jqwidgets/angular_jqxprogressbar';

@Component({
    selector: 'progress-bar',
    template: `
        <div class="progress-bar-wrapper" >
            <div class="bar-value">{{value}} <span>kW</span></div>
            <div class='progress-bar-content' style="position: relative;display: inline-block">
                <jqxProgressBar [width]='width'
                                [height]='6'
                                [value]='value'
                                [min]="min"
                                [max]="max"
                                [colorRanges]="colorRanges"
                                [animationDuration]="0"
                >
                </jqxProgressBar>
                <label class="bar-label">power</label>
                <div [style.left.px]="warningPosition" class=" triangle triangle-warning"></div>
                <div [style.left.px]="dangerPosition" class=" triangle triangle-danger"></div>
            </div>
        </div>`
})
export class ProgressBarComponent implements OnInit {

    min: number = 0;
    width:number = 150;
    max: number = 9;
    warning: number = 4;
    danger: number = 7;
    colorRanges:any;
    value:number = 5;
    dangerPosition:number;
    warningPosition:number;

    setColor(value):void{
        if(value < this.danger){
            if(value >= this.warning){
                this.colorRanges = [{stop:this.max,color:'#fdd835'}]
            }else {
                this.colorRanges = [{stop:this.max,color:'#00b590'}]
            }
        }else {
            this.colorRanges = [{stop:this.max,color:'#c72f39'}]
        }
    }

    constructor() {
    }

    ngOnInit() {
        this.dangerPosition = this.width/this.max * this.danger - 5 ;
        this.warningPosition =  this.width/this.max * this.warning - 5 ;
        this.setColor(this.value);
    }

}