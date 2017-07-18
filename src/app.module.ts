import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule, JsonpModule } from '@angular/http';

import {MomentModule} from 'angular2-moment';

import {RequestService} from './shared/services/request.service';
import { AppComponent }  from './app.component';
import {DashboardComponent} from './Dashboard/dashboard.component'
import {DashboardFilterComponent} from './Dashboard/filter/filter.component'
import {DashboardMainComponent} from './Dashboard/main/dashboardMain.component'
import {HeaderComponent} from './header/header.component'
import {HomeComponent} from './Home/home.comopnent'

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

const appRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent,
        children:[
            {path:'filter', component: DashboardFilterComponent},
            {path:'',component:DashboardMainComponent,}
        ] },
    { path: 'home', component: HomeComponent },
     { path: '',   redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        MomentModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers:[RequestService],
    declarations: [
        AppComponent,
        HomeComponent,
        DashboardComponent,
        DashboardFilterComponent,
        DashboardMainComponent,
        HeaderComponent
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
    bootstrap: [AppComponent]
})

export class AppModule { }