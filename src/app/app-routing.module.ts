import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkshopComponent } from './pages/workshop/workshop.component';

const routes: Routes = [
  { path: 'workshop', component: WorkshopComponent },
  { path: 'workshop/:id', component: WorkshopComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
