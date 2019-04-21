import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HeaderChild1Component } from './components/header-child1/header-child1.component';
import { HeaderChild2Component } from './components/header-child2/header-child2.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderChild1Component,
    HeaderChild2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
