import { Component, OnInit } from '@angular/core';

import {RequestService} from '../../shared/services/request.service';

@Component({
    selector: 'dashboardMain-view',
    templateUrl: './Dashboard/main/dashboardMain.component.html',
    styleUrls:['./Dashboard/main/dashboardMain.component.css']
})
export class DashboardMainComponent implements OnInit {
    rooms:any[];

    constructor(private requestService:RequestService) { }

    ngOnInit() {
        this.getData();
     }
    
    getData(){
        this.requestService.getData('dashboarddata.json')
                           .subscribe(
                               responce => {
                                   this.rooms = responce;
                                   console.log(responce)
                               },
                               error => console.log(error)
                           )
    }
}