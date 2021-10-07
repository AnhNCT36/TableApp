import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { InforComponent } from './infor/infor.component';
import { TransformNumberPipe } from './transform-number.pipe';


@NgModule({
  declarations: [
    AppComponent,
    InforComponent,
    TransformNumberPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
