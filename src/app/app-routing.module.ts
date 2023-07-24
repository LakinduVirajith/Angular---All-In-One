import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { IPostComponent } from './decorators/input-decorator/i-post/i-post.component';
import { UPostComponent } from './decorators/output-decorator/u-post/u-post.component';

import { DataBindingComponent } from './binding-methods/data-binding/data-binding.component';
import { EventBindingComponent } from './binding-methods/event-binding/event-binding.component';
import { TwoWayBindingComponent } from './binding-methods/two-way-binding/two-way-binding.component';
import { NgForComponent } from './directive/ng-for/ng-for.component';
import { ChangeDetectionComponent } from './directive/change-detection/change-detection.component';
import { NgIfComponent } from './directive/ng-if/ng-if.component';
import { NgSwitchCaseComponent } from './directive/ng-switch-case/ng-switch-case.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },

  { path: 'input-decorator', component: IPostComponent },
  { path: 'output-decorator', component: UPostComponent },

  { path: 'data-binding', component: DataBindingComponent },
  { path: 'event-binding', component: EventBindingComponent },
  { path: 'two-way-binding', component: TwoWayBindingComponent },

  { path: 'ng-for-directive', component: NgForComponent },
  { path: 'change-detection', component: ChangeDetectionComponent },
  { path: 'ng-if-directive', component: NgIfComponent },
  { path: 'ng-switch-case-directive', component: NgSwitchCaseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
