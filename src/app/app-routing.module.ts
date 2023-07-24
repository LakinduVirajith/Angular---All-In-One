import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { IPostComponent } from './decorators/input-decorator/i-post/i-post.component';
import { UPostComponent } from './decorators/output-decorator/u-post/u-post.component';

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
  { path: 'ng-style-directive', component: NgStyleComponent },
  { path: 'ng-class-directive', component: NgClassComponent },

  { path: 'pipes', component: PipesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
