import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { WarningAllertsComponent } from './components/warning-allerts/warning-allerts.component';
import { SuccessAlertComponent } from './components/success-alert/success-alert.component';

@NgModule({
  declarations: [
    AppComponent,
    WarningAllertsComponent,
    SuccessAlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
