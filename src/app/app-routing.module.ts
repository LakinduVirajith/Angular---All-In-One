import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

import { IPostComponent } from './decorators/input-decorator/i-post/i-post.component';
import { UPostComponent } from './decorators/output-decorator/u-post/u-post.component';
import { VcPostComponent } from './decorators/view-child-decorator/vc-post/vc-post.component';
import { HostListenerComponent } from './decorators/host-listener/host-listener.component';
import { HostBindingComponent } from './decorators/host-binding/host-binding.component';

import { DataBindingComponent } from './bindings/data-binding/data-binding.component';
import { EventBindingComponent } from './bindings/event-binding/event-binding.component';
import { TwoWayBindingComponent } from './bindings/two-way-binding/two-way-binding.component';

import { NgForComponent } from './directives/ng-for/ng-for.component';
import { NgIfComponent } from './directives/ng-if/ng-if.component';
import { NgSwitchCaseComponent } from './directives/ng-switch-case/ng-switch-case.component';
import { NgStyleComponent } from './directives/ng-style/ng-style.component';
import { NgClassComponent } from './directives/ng-class/ng-class.component';
import { CustomDirectiveComponent } from './directives/custom-directive/custom-directive.component';

import { PipesComponent } from './pipes/pipes.component';

import { DrivenFormComponent } from './forms/driven-form/driven-form.component';
import { ReactiveFormComponent } from './forms/reactive-form/reactive-form.component';
import { ReactiveFormWithFormBuilderComponent } from './forms/reactive-form-with-form-builder/reactive-form-with-form-builder.component';
import { FormWithCustomValidationsComponent } from './forms/form-with-custom-validations/form-with-custom-validations.component';

import { CalculatorComponent } from './services/calculator/calculator.component';

import { TopicRouteGuardsComponent } from './pages/route-guards/topic-route-guards.component';
import { CanActivateComponent } from './route-guards/can-activate/can-activate.component';
import { CanDeactivateComponent } from './route-guards/can-deactivate/can-deactivate.component';
import { authGuard } from './route-guards/guards/auth.guard';
import { CanActivateChildComponent } from './route-guards/can-activate-child/can-activate-child.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },

  { path: 'input-decorator', component: IPostComponent },
  { path: 'output-decorator', component: UPostComponent },
  { path: 'view-child-decorator', component: VcPostComponent },
  { path: 'host-listener-decorator', component: HostListenerComponent },
  { path: 'host-binding-decorator', component: HostBindingComponent },

  { path: 'data-binding', component: DataBindingComponent },
  { path: 'event-binding', component: EventBindingComponent },
  { path: 'two-way-binding', component: TwoWayBindingComponent },

  { path: 'ng-for-directive', component: NgForComponent },
  { path: 'ng-if-directive', component: NgIfComponent },
  { path: 'ng-switch-case-directive', component: NgSwitchCaseComponent },
  { path: 'ng-style-directive', component: NgStyleComponent },
  { path: 'ng-class-directive', component: NgClassComponent },
  { path: 'custom-directive', component: CustomDirectiveComponent },

  { path: 'pipes', component: PipesComponent },

  { path: 'driven-form', component: DrivenFormComponent },
  { path: 'reactive-form', component: ReactiveFormComponent },
  { path: 'reactive-form-with-form-builder', component: ReactiveFormWithFormBuilderComponent },
  { path: 'form-with-custom-validations', component: FormWithCustomValidationsComponent },

  { path: 'calculator-service', component: CalculatorComponent},

  { path: 'route-guards' , component: TopicRouteGuardsComponent },
  { path: 'can-activate', component: CanActivateComponent, canActivate: [authGuard]},
  { path: 'can-activate-child', component: CanActivateChildComponent},
  { path: 'can-deactivate', component: CanDeactivateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
