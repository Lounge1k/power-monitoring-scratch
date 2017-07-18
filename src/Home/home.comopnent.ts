import { Component, OnInit } from '@angular/core';
import {devicesStatus, homeData} from './data';
import {RequestService} from '../shared/services/request.service';
import moment = require("moment");


@Component({
    selector: 'main-view',
    templateUrl: './home/home.component.html',
    styleUrls:['./home/home.component.css']
})
export class HomeComponent implements OnInit {

    deviceStatus:any = devicesStatus;
    messages:any[];
    errorMessage:string;
    todayMes:any[] = [];
    yestMes:any[] = [];
    olderMes:any[] = []; 

    constructor(
        private requestService:RequestService
        ) {
     }

    ngOnInit() {
        //this.parseMessages(this.messages);
        this.getData();
     }

    parseMessages(arr):void {
        let today = moment().startOf('day');
        for(let i=0;i<arr.length;i++){
            let date = moment(arr[i].date).startOf('day');
            arr[i].foramted = date.format('MM-DD');
            arr[i].showSettings = false;
            switch(today.diff(date,'days')+1){
                case 1 : {
                    this.todayMes.push(arr[i]);
                    break;
                }
                case 2 : {
                    this.yestMes.push(arr[i]);
                    break;
                }
                default : {
                    this.olderMes.push(arr[i])
                    break;
                }
            }
        }
    }

    getData(){
        this.requestService.getData('homedata.json')
                           .subscribe(
                               response => {
                                   this.messages = response;
                                   this.parseMessages(this.messages);
                                },
                               error => this.errorMessage = <any>error);
    }

    
    

}