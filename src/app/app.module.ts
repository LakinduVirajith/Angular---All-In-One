import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { IPostComponent } from './decorators/input-decorator/i-post/i-post.component';
import { IPostListComponent } from './decorators/input-decorator/i-post-list/i-post-list.component';
import { UPostComponent } from './decorators/output-decorator/u-post/u-post.component';
import { UPostListComponent } from './decorators/output-decorator/u-post-list/u-post-list.component';

import { DataBindingComponent } from './binding-methods/data-binding/data-binding.component';
import { EventBindingComponent } from './binding-methods/event-binding/event-binding.component';
import { TwoWayBindingComponent } from './binding-methods/two-way-binding/two-way-binding.component';

import { NgForComponent } from './directive/ng-for/ng-for.component';
import { ChangeDetectionComponent } from './directive/change-detection/change-detection.component';
import { NgIfComponent } from './directive/ng-if/ng-if.component';
import { NgSwitchCaseComponent } from './directive/ng-switch-case/ng-switch-case.component';
import { NgStyleComponent } from './directive/ng-style/ng-style.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,

    IPostComponent,
    IPostListComponent,
    UPostComponent,
    UPostListComponent,

    DataBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent,

    NgForComponent,
      ChangeDetectionComponent,
      NgIfComponent,
      NgSwitchCaseComponent,
      NgStyleComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
