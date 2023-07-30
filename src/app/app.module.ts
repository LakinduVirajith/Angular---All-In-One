import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './pages/home/home.component';

import { IPostComponent } from './decorators/input-decorator/i-post/i-post.component';
import { IPostListComponent } from './decorators/input-decorator/i-post-list/i-post-list.component';
import { UPostComponent } from './decorators/output-decorator/u-post/u-post.component';
import { UPostListComponent } from './decorators/output-decorator/u-post-list/u-post-list.component';
import { VcPostComponent } from './decorators/view-child-decorator/vc-post/vc-post.component';
import { VcPostListComponent } from './decorators/view-child-decorator/vc-post-list/vc-post-list.component';
import { HostListenerComponent } from './decorators/host-listener/host-listener.component';
import { HostBindingComponent } from './decorators/host-binding/host-binding.component';

import { ClickListenerDirective } from './decorators/host-listener/listeners/click-listener.directive';
import { DoubleClickListenerDirective } from './decorators/host-listener/listeners/double-click-listener.directive';
import { MouseenterListenerDirective } from './decorators/host-listener/listeners/mouseenter-listener.directive';
import { MouseleaveListenerDirective } from './decorators/host-listener/listeners/mouseleave-listener.directive';
import { MousemoveListenerDirective } from './decorators/host-listener/listeners/mousemove-listener.directive';
import { KeyupListenerDirective } from './decorators/host-listener/listeners/keyup-listener.directive';
import { KeydownListenerDirective } from './decorators/host-listener/listeners/keydown-listener.directive';
import { ScrollListenerDirective } from './decorators/host-listener/listeners/scroll-listener.directive';
import { ResizedListenerDirective } from './decorators/host-listener/listeners/resized-listener.directive';

import { HostBinding1Directive } from './decorators/host-binding/bindings/host-binding-1.directive';
import { HostBinding2Directive } from './decorators/host-binding/bindings/host-binding-2.directive';

import { DataBindingComponent } from './bindings/data-binding/data-binding.component';
import { EventBindingComponent } from './bindings/event-binding/event-binding.component';
import { TwoWayBindingComponent } from './bindings/two-way-binding/two-way-binding.component';

import { NgForComponent } from './directives/ng-for/ng-for.component';
import { NgIfComponent } from './directives/ng-if/ng-if.component';
import { NgSwitchCaseComponent } from './directives/ng-switch-case/ng-switch-case.component';
import { NgStyleComponent } from './directives/ng-style/ng-style.component';
import { NgClassComponent } from './directives/ng-class/ng-class.component';
import { CustomDirectiveComponent } from './directives/custom-directive/custom-directive.component';
import { ValidationDirective } from './directives/custom-directive/custom-directive.component';
import { HighlightDirective } from './directives/custom-directive/custom-directive.component';

import { PipesComponent } from './pipes/pipes.component';
import { AppendPipe } from './pipes/append/append.pipe';
import { SummaryPipe } from './pipes/summary/summary.pipe';

import { DrivenFormComponent } from './forms/driven-form/driven-form.component';
import { ReactiveFormComponent } from './forms/reactive-form/reactive-form.component';
import { ReactiveFormWithFormBuilderComponent } from './forms/reactive-form-with-form-builder/reactive-form-with-form-builder.component';
import { FormWithCustomValidationsComponent } from './forms/form-with-custom-validations/form-with-custom-validations.component';

import { CalculatorComponent } from './services/calculator/calculator.component';

import { CanActivateComponent } from './route-guards/can-activate/can-activate.component';
import { CanDeactivateComponent } from './route-guards/can-deactivate/can-deactivate.component';
import { TopicRouteGuardsComponent } from './pages/route-guards/topic-route-guards.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,

    IPostComponent,
    IPostListComponent,
    UPostComponent,
    UPostListComponent,
    VcPostComponent,
    VcPostListComponent,
    HostListenerComponent,
    HostBindingComponent,

    ClickListenerDirective,
    DoubleClickListenerDirective,
    MouseenterListenerDirective,
    MouseleaveListenerDirective,
    MousemoveListenerDirective,
    KeyupListenerDirective,
    KeydownListenerDirective,
    ScrollListenerDirective,
    ResizedListenerDirective,

    HostBinding1Directive,
    HostBinding2Directive,  

    DataBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent,

    NgForComponent,
    NgIfComponent,
    NgSwitchCaseComponent,
    NgStyleComponent,
    NgClassComponent,
    CustomDirectiveComponent,
    ValidationDirective,
    HighlightDirective,

    PipesComponent,
    AppendPipe,
    SummaryPipe,

    DrivenFormComponent,
    ReactiveFormComponent,
    ReactiveFormWithFormBuilderComponent,
    FormWithCustomValidationsComponent,
    
    CalculatorComponent,
          
    CanActivateComponent,
    CanDeactivateComponent,
    TopicRouteGuardsComponent, 
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule, NgbModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
