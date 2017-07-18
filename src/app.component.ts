import {Component, OnInit} from '@angular/core';
import {HeaderComponent} from './header/header.component'


@Component({
    selector: 'my-app',
    templateUrl:'/app.component.html',
    styleUrls:['./app.component.scss']
})
export class AppComponent implements OnInit {

    constructor() {

    }

    ngOnInit() {
        console.log(this);
    }

}