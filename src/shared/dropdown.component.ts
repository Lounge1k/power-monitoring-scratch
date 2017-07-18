import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

// export class DropdownValue {
//     value: string;
//     label: string;
//
//     constructor(value: string, label: string) {
//         this.value = value;
//         this.label = label;
//     }
// }

@Component({
    selector: 'dropdown',
    template: `
        <div class="dropdown" (clickOutside)="showDropdown = false;">
            <div 
                    class="dropdown-button"
                    (click)="showDropdown = !showDropdown;">
               {{label}}
                <i
                        style='margin-left: 5px'
                        class="fa fa-angle-down"
                        [ngClass]="showDropdown ? '' : 'fa-rotate-180'"
                        aria-hidden="true">
                    
                </i>
            </div>
            <div class="dropdown-menu">
                <div 
                        *ngFor="let value of values"
                        [hidden]="!showDropdown"
                        (click)="selectItem(value);showDropdown = false"
                >
                    {{value.label}}
                </div>
            </div>
        </div>
        <label>my fault</label>
        <div class="form-group error">
            <label>Description</label>
            <input id="input" [(ngModel)]="label" class="form-control"/>
            <div class="error-message">{{label}}</div>
        </div>`
})

export class DropDownComponent implements OnInit {
    @Input()
    values: any[];

    @Input()
    label:string;

    @Output()
    select: EventEmitter;

    showDropdown: boolean = false;

    constructor() {
        this.select = new EventEmitter();
    }

    selectItem(value) {
        this.select.emit(value);
        console.log(value);
    }
}