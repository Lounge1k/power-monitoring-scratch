import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'dashboard-view',
    template: `<router-outlet></router-outlet>` 
})
export class DashboardComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}