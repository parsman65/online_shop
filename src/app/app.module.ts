import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AppMainComponent} from "./structure/MainComponent/app.main.component";
import { AppFooterComponent } from './structure/FooterComponent/app.footer.component';
import { AppBreadcrumbComponent } from './structure/BreadcrumbComponent/app.breadcrumb.component';
import { AppMenuComponent } from './structure/MenuComponent/app.menu.component';
import { AppTopbarComponent } from './structure/TopbarComponent/app.topbar.component';

@NgModule({
  declarations: [
    AppComponent,
    AppMainComponent,
    AppFooterComponent,
    AppBreadcrumbComponent,
    AppMenuComponent,
    AppTopbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
