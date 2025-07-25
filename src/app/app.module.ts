import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routes';

// Import standalone components
import { App } from './app';
import { AdminDashboardComponent } from './modules/admin/admin-dashboard.component';
import { InstituteListComponent } from './modules/admin/institute-list.component';
import { InstituteDashboardComponent } from './modules/institute/institute-dashboard.component';
import { LicenseRenewalComponent } from './modules/institute/license-renewal.component';
import { NotificationListComponent } from './modules/institute/notification-list.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    App,
    AdminDashboardComponent,
    InstituteDashboardComponent,
    InstituteListComponent,
    LicenseRenewalComponent,
    NotificationListComponent,
  ],
  bootstrap: [App],
})
export class AppModule {}
