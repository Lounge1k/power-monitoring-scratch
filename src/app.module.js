"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var angular2_moment_1 = require("angular2-moment");
var request_service_1 = require("./shared/services/request.service");
var app_component_1 = require("./app.component");
var dashboard_component_1 = require("./Dashboard/dashboard.component");
var filter_component_1 = require("./Dashboard/filter/filter.component");
var dashboardMain_component_1 = require("./Dashboard/main/dashboardMain.component");
var header_component_1 = require("./header/header.component");
var home_comopnent_1 = require("./Home/home.comopnent");
// import { GaugeComponent }  from './gauge.component';
// import { LineGraphComponent }  from './line-graph.component';
// import {ColumnGraphComponent} from './column-graph.component'
// import { jqxGaugeComponent } from 'jqwidgets/angular_jqxgauge';
// import { jqxChartComponent } from 'jqwidgets/angular_jqxChart'
// import { mqtt } from './mqtt.component';
// import {AreaGraphComponent} from './area-graph.component'
// import {DropDownComponent} from './dropdown.component'
// import {ClickOutsideDirective} from 'clickOutside';
// import { jqxProgressBarComponent } from 'jqwidgets/angular_jqxprogressbar';
// import {ProgressBarComponent} from './progress-bar.component'
var appRoutes = [
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent,
        children: [
            { path: 'filter', component: filter_component_1.DashboardFilterComponent },
            { path: '', component: dashboardMain_component_1.DashboardMainComponent, }
        ] },
    { path: 'home', component: home_comopnent_1.HomeComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            http_1.JsonpModule,
            angular2_moment_1.MomentModule,
            router_1.RouterModule.forRoot(appRoutes)
        ],
        providers: [request_service_1.RequestService],
        declarations: [
            app_component_1.AppComponent,
            home_comopnent_1.HomeComponent,
            dashboard_component_1.DashboardComponent,
            filter_component_1.DashboardFilterComponent,
            dashboardMain_component_1.DashboardMainComponent,
            header_component_1.HeaderComponent
            // ClickOutsideDirective,
            // jqxProgressBarComponent,
            // jqxGaugeComponent,
            // jqxChartComponent,
            // GaugeComponent,
            // LineGraphComponent,
            // ColumnGraphComponent,
            // AreaGraphComponent,
            // ProgressBarComponent,
            // // mqtt,
            // DropDownComponent
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map