import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LicenseRenewalComponent } from './license-renewal.component';
import { NotificationListComponent } from './notification-list.component';

@Component({
  selector: 'app-institute-dashboard',
  standalone: true,
  imports: [CommonModule, LicenseRenewalComponent, NotificationListComponent],
  template: `
    <h1>Institute Admin Panel</h1>
    <app-license-renewal [instituteId]="1"></app-license-renewal>
    <app-notification-list
      [instituteId]="1"
      [userId]="1"
    ></app-notification-list>
  `,
})
export class InstituteDashboardComponent {}
