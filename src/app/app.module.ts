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

import { DataBindingComponent } from './bindings/data-binding/data-binding.component';
import { EventBindingComponent } from './bindings/event-binding/event-binding.component';
import { TwoWayBindingComponent } from './bindings/two-way-binding/two-way-binding.component';

import { NgForComponent } from './directives/ng-for/ng-for.component';
import { ChangeDetectionComponent } from './directives/change-detection/change-detection.component';
import { NgIfComponent } from './directives/ng-if/ng-if.component';
import { NgSwitchCaseComponent } from './directives/ng-switch-case/ng-switch-case.component';
import { NgStyleComponent } from './directives/ng-style/ng-style.component';
import { NgClassComponent } from './directives/ng-class/ng-class.component';
import { PipesComponent } from './pipes/pipes.component';
import { AppendPipe } from './pipes/append/append.pipe';
import { SummaryPipe } from './pipes/summary/summary.pipe';

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
      NgClassComponent,
      PipesComponent,
      AppendPipe,
      SummaryPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
