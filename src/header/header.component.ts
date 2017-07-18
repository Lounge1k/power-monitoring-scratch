import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
    selector:'app-header',
    templateUrl: './header/header.component.html',
    styleUrls:['./header/header.component.css']
})
export class HeaderComponent implements OnInit {
    showMenu:boolean = false;
    showSubMenuu:boolean = false;

    constructor(
         private router: Router
    ) { }

    ngOnInit() {
       this.router.events.subscribe(event => {
           if(event instanceof NavigationEnd){
               this.showMenu = false;
           }
       })
    }

}