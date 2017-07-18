"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
// export class DropdownValue {
//     value: string;
//     label: string;
//
//     constructor(value: string, label: string) {
//         this.value = value;
//         this.label = label;
//     }
// }
var DropDownComponent = (function () {
    function DropDownComponent() {
        this.showDropdown = false;
        this.select = new core_1.EventEmitter();
    }
    DropDownComponent.prototype.selectItem = function (value) {
        this.select.emit(value);
        console.log(value);
    };
    return DropDownComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], DropDownComponent.prototype, "values", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], DropDownComponent.prototype, "label", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], DropDownComponent.prototype, "select", void 0);
DropDownComponent = __decorate([
    core_1.Component({
        selector: 'dropdown',
        template: "\n        <div class=\"dropdown\" (clickOutside)=\"showDropdown = false;\">\n            <div \n                    class=\"dropdown-button\"\n                    (click)=\"showDropdown = !showDropdown;\">\n               {{label}}\n                <i\n                        style='margin-left: 5px'\n                        class=\"fa fa-angle-down\"\n                        [ngClass]=\"showDropdown ? '' : 'fa-rotate-180'\"\n                        aria-hidden=\"true\">\n                    \n                </i>\n            </div>\n            <div class=\"dropdown-menu\">\n                <div \n                        *ngFor=\"let value of values\"\n                        [hidden]=\"!showDropdown\"\n                        (click)=\"selectItem(value);showDropdown = false\"\n                >\n                    {{value.label}}\n                </div>\n            </div>\n        </div>\n        <label>my fault</label>\n        <div class=\"form-group error\">\n            <label>Description</label>\n            <input id=\"input\" [(ngModel)]=\"label\" class=\"form-control\"/>\n            <div class=\"error-message\">{{label}}</div>\n        </div>"
    }),
    __metadata("design:paramtypes", [])
], DropDownComponent);
exports.DropDownComponent = DropDownComponent;
//# sourceMappingURL=dropdown.component.js.map