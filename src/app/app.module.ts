import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { DataBindingComponent } from './binding-methods/data-binding/data-binding.component';
import { EventBindingComponent } from './binding-methods/event-binding/event-binding.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, DataBindingComponent, EventBindingComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
