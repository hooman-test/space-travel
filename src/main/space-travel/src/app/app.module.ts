import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LifeFormsComponent} from './life-forms/life-forms.component';
import {HttpClientModule} from '@angular/common/http';
import {LifeFormService} from './service/life-form/life-form.service';
import { ShuttleComponent } from './shuttle/shuttle.component';

@NgModule({
  declarations: [
    AppComponent,
    LifeFormsComponent,
    ShuttleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
