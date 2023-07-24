import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DataBindingComponent } from './binding-methods/data-binding/data-binding.component';
import { EventBindingComponent } from './binding-methods/event-binding/event-binding.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },

  { path: 'data-binding', component: DataBindingComponent },
  { path: 'event-binding', component: EventBindingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
