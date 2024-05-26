import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './app.component';
import {LayoutHeaderComponent} from './layout/header.component';
import {LayoutSidenavComponent} from './layout/sidenav-component';
import {appRoutes} from './routes';
import {ExampleHostDirective, ExampleViewerComponent} from './shared/example-viewer/example-viewer.component';
import {StackblitzButtonComponent} from './shared/example-viewer/stackblitz-button/stackblitz-button.component';
import {RouteViewerComponent} from './shared/route-viewer/route-viewer.component';

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        NgbModule,
        RouterModule.forRoot(appRoutes, {
    useHash: true
}),
        ExampleHostDirective,
        LayoutHeaderComponent,
        LayoutSidenavComponent,
        ExampleViewerComponent,
        StackblitzButtonComponent,
        RouteViewerComponent
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}

