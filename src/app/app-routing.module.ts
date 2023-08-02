import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

import { DecoratorsComponent } from './pages/decorator-navs/decorators.component';
import { IPostComponent } from './decorators/input-decorator/i-post/i-post.component';
import { UPostComponent } from './decorators/output-decorator/u-post/u-post.component';
import { VcPostComponent } from './decorators/view-child-decorator/vc-post/vc-post.component';
import { HostListenerComponent } from './decorators/host-listener/host-listener.component';
import { HostBindingComponent } from './decorators/host-binding/host-binding.component';

import { BindingsComponent } from './pages/binding-navs/bindings.component';
import { DataBindingComponent } from './bindings/data-binding/data-binding.component';
import { EventBindingComponent } from './bindings/event-binding/event-binding.component';
import { TwoWayBindingComponent } from './bindings/two-way-binding/two-way-binding.component';

import { DirectivesComponent } from './pages/directive-navs/directives.component';
import { NgForComponent } from './directives/ng-for/ng-for.component';
import { NgIfComponent } from './directives/ng-if/ng-if.component';
import { NgSwitchCaseComponent } from './directives/ng-switch-case/ng-switch-case.component';
import { NgStyleComponent } from './directives/ng-style/ng-style.component';
import { NgClassComponent } from './directives/ng-class/ng-class.component';
import { CustomDirectiveComponent } from './directives/custom-directive/custom-directive.component';

import { PipesComponent } from './pipes/pipes.component';

import { FormsComponent } from './pages/form-navs/forms.component';
import { DrivenFormComponent } from './forms/driven-form/driven-form.component';
import { ReactiveFormComponent } from './forms/reactive-form/reactive-form.component';
import { ReactiveFormWithFormBuilderComponent } from './forms/reactive-form-with-form-builder/reactive-form-with-form-builder.component';
import { FormWithCustomValidationsComponent } from './forms/form-with-custom-validations/form-with-custom-validations.component';

import { LifecycleHooksComponent } from './lifecycle-hooks/lifecycle-hooks.component';

import { CalculatorComponent } from './services/calculator/calculator.component';

import { RouteGuardsComponent } from './pages/route-guard-navs/route-guards.component';
import { CanActivateComponent } from './route-guards/can-activate/can-activate.component';
import { CanDeactivateComponent } from './route-guards/can-deactivate/can-deactivate.component';
import { CanActivateChildComponent } from './route-guards/can-activate-child/can-activate-child.component';
import { UserHomeComponent } from './route-guards/can-match/user-home/user-home.component';
import { SellerDashboardComponent } from './route-guards/can-match/seller-dashboard/seller-dashboard.component';
import { AdminDashboardComponent } from './route-guards/can-match/admin-dashboard/admin-dashboard.component';

import { authGuard } from './route-guards/guards/auth.guard';
import { workStatusGuard } from './route-guards/guards/work-status.guard';
import { sellerGuard } from './route-guards/guards/seller.guard';
import { adminGuard } from './route-guards/guards/admin.guard';

import { StoragesComponent } from './pages/storage-navs/storages.component';
import { LocalStorageComponent } from './storages/local-storage/local-storage.component';
import { SessionStorageComponent } from './storages/session-storage/session-storage.component';
import { CookiesComponent } from './storages/cookies/cookies.component';
import { IndexedDbComponent } from './storages/indexed-db/indexed-db.component';

import { HttpClientComponent } from './http-client/http-client.component';

import { AnimationsNavComponent } from './pages/animations-nav/animations-nav.component';
import { FadeInAndOutComponent } from './animations/fade-in-and-out/fade-in-and-out.component';
import { SlideInAndOutComponent } from './animations/slide-in-and-out/slide-in-and-out.component';
import { ScaleComponent } from './animations/scale/scale.component';
import { RotateComponent } from './animations/rotate/rotate.component';
import { ColorChangeComponent } from './animations/color-change/color-change.component';
import { KeyframeComponent } from './animations/keyframe/keyframe.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },

  { path: 'decorators', component: DecoratorsComponent },
  { path: 'input-decorator', component: IPostComponent },
  { path: 'output-decorator', component: UPostComponent },
  { path: 'view-child-decorator', component: VcPostComponent },
  { path: 'host-listener-decorator', component: HostListenerComponent },
  { path: 'host-binding-decorator', component: HostBindingComponent },

  { path: 'bindings', component: BindingsComponent },
  { path: 'data-binding', component: DataBindingComponent },
  { path: 'event-binding', component: EventBindingComponent },
  { path: 'two-way-binding', component: TwoWayBindingComponent },

  { path: 'directives', component: DirectivesComponent },
  { path: 'ng-for-directive', component: NgForComponent },
  { path: 'ng-if-directive', component: NgIfComponent },
  { path: 'ng-switch-case-directive', component: NgSwitchCaseComponent },
  { path: 'ng-style-directive', component: NgStyleComponent },
  { path: 'ng-class-directive', component: NgClassComponent },
  { path: 'custom-directive', component: CustomDirectiveComponent },

  { path: 'pipes', component: PipesComponent },

  { path: 'forms' , component: FormsComponent },
  { path: 'driven-form', component: DrivenFormComponent },
  { path: 'driven-form', component: DrivenFormComponent },
  { path: 'reactive-form', component: ReactiveFormComponent },
  { path: 'reactive-form-with-form-builder', component: ReactiveFormWithFormBuilderComponent },
  { path: 'form-with-custom-validations', component: FormWithCustomValidationsComponent },

  { path: 'lifecycle-hooks', component: LifecycleHooksComponent},

  { path: 'calculator-service', component: CalculatorComponent},

  { path: 'route-guards' , component: RouteGuardsComponent },
  { path: 'can-activate', component: CanActivateComponent, canActivate: [authGuard]},
  { path: 'can-activate-child', component: CanActivateChildComponent},
  { path: 'can-deactivate', component: CanDeactivateComponent, canDeactivate: [workStatusGuard]},
  { path: 'can-match', component: AdminDashboardComponent, canMatch: [adminGuard]},
  { path: 'can-match', component: SellerDashboardComponent, canMatch: [sellerGuard]},
  { path: 'can-match', component: UserHomeComponent},

  { path: 'storages', component: StoragesComponent},
  { path: 'local-storage', component: LocalStorageComponent},
  { path: 'session-storage', component: SessionStorageComponent},
  { path: 'cookies', component: CookiesComponent},
  { path: 'indexed-db', component: IndexedDbComponent},

  { path: 'http-client', component: HttpClientComponent},

  { path: 'animations', component: AnimationsNavComponent},
  { path: 'fade-in-and-out', component: FadeInAndOutComponent},
  { path: 'slide-in-and-out', component: SlideInAndOutComponent},
  { path: 'scale', component: ScaleComponent},
  { path: 'rotate', component: RotateComponent},
  { path: 'color-change', component: ColorChangeComponent},
  { path : 'keyframe', component: KeyframeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
