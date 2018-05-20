import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CraigsComponentComponent } from './craigs-component/craigs-component.component';
import { BsAlertBarComponent } from './bs-alert-bar/bs-alert-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    CraigsComponentComponent,
    BsAlertBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
