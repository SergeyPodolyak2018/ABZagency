import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServicesComponent } from './services/services.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { FormComponent } from './form/form.component';
import { WrapperFormComponent } from './wrapper-form/wrapper-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ServicesComponent,
    WrapperComponent,
    FormComponent,
    WrapperFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
