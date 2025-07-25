// import { Routes } from '@angular/router';

// export const routes: Routes = [];
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './modules/admin/admin-dashboard.component';
import { InstituteDashboardComponent } from './modules/institute/institute-dashboard.component';

const routes: Routes = [
  { path: 'admin', component: AdminDashboardComponent },
  { path: 'institute', component: InstituteDashboardComponent },
  { path: '', redirectTo: '/admin', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
