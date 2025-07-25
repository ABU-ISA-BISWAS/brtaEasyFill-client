import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InstituteService } from '../../core/services/institute.service';

@Component({
  selector: 'app-license-renewal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div>
      <h2>License Renewal</h2>
      <input [(ngModel)]="newLicenseKey" placeholder="New License Key" />
      <button (click)="renew()" [disabled]="loading || !newLicenseKey">
        Renew
      </button>
      <span *ngIf="success">{{ success }}</span>
      <span *ngIf="error" style="color:red">{{ error }}</span>
    </div>
  `,
})
export class LicenseRenewalComponent {
  @Input() instituteId!: number;
  newLicenseKey = '';
  loading = false;
  success = '';
  error = '';

  constructor(private instituteService: InstituteService) {}

  renew() {
    this.success = '';
    this.error = '';
    if (this.newLicenseKey && this.instituteId) {
      this.loading = true;
      this.instituteService
        .renewLicense(this.instituteId, this.newLicenseKey)
        .subscribe({
          next: () => {
            this.success = 'License renewed!';
            this.loading = false;
            this.newLicenseKey = '';
          },
          error: (err) => {
            this.error =
              'Renewal failed: ' + (err.error?.message || 'Unknown error');
            this.loading = false;
          },
        });
    }
  }
}
