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
var ProgressBarComponent = (function () {
    function ProgressBarComponent() {
        this.min = 0;
        this.width = 150;
        this.max = 9;
        this.warning = 4;
        this.danger = 7;
        this.value = 5;
    }
    ProgressBarComponent.prototype.setColor = function (value) {
        if (value < this.danger) {
            if (value >= this.warning) {
                this.colorRanges = [{ stop: this.max, color: '#fdd835' }];
            }
            else {
                this.colorRanges = [{ stop: this.max, color: '#00b590' }];
            }
        }
        else {
            this.colorRanges = [{ stop: this.max, color: '#c72f39' }];
        }
    };
    ProgressBarComponent.prototype.ngOnInit = function () {
        this.dangerPosition = this.width / this.max * this.danger - 5;
        this.warningPosition = this.width / this.max * this.warning - 5;
        this.setColor(this.value);
    };
    return ProgressBarComponent;
}());
ProgressBarComponent = __decorate([
    core_1.Component({
        selector: 'progress-bar',
        template: "\n        <div class=\"progress-bar-wrapper\" >\n            <div class=\"bar-value\">{{value}} <span>kW</span></div>\n            <div class='progress-bar-content' style=\"position: relative;display: inline-block\">\n                <jqxProgressBar [width]='width'\n                                [height]='6'\n                                [value]='value'\n                                [min]=\"min\"\n                                [max]=\"max\"\n                                [colorRanges]=\"colorRanges\"\n                                [animationDuration]=\"0\"\n                >\n                </jqxProgressBar>\n                <label class=\"bar-label\">power</label>\n                <div [style.left.px]=\"warningPosition\" class=\" triangle triangle-warning\"></div>\n                <div [style.left.px]=\"dangerPosition\" class=\" triangle triangle-danger\"></div>\n            </div>\n        </div>"
    }),
    __metadata("design:paramtypes", [])
], ProgressBarComponent);
exports.ProgressBarComponent = ProgressBarComponent;
//# sourceMappingURL=progress-bar.component.js.map