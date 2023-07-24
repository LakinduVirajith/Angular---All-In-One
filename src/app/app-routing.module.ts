import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DataBindingComponent } from './binding-methods/data-binding/data-binding.component';
import { EventBindingComponent } from './binding-methods/event-binding/event-binding.component';
import { TwoWayBindingComponent } from './binding-methods/two-way-binding/two-way-binding.component';
import { IPostComponent } from './decorators/input-decorator/i-post/i-post.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },

  { path: 'data-binding', component: DataBindingComponent },
  { path: 'event-binding', component: EventBindingComponent },
  { path: 'two-way-binding', component: TwoWayBindingComponent },

  { path: 'input-decorator', component: IPostComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
