import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { InstituteService } from '../../core/services/institute.service';
import { Institute } from '../../shared/models/institute.model';

@Component({
  selector: 'app-institute-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Institutes</h2>
    <ul>
      <li *ngFor="let inst of institutes">
        {{ inst.name }} - {{ inst.status }}
        <button (click)="renewLicense(inst)">Renew License</button>
      </li>
    </ul>
  `,
})
export class InstituteListComponent implements OnInit {
  institutes: Institute[] = [];
  constructor(private instituteService: InstituteService) {}

  ngOnInit() {
    this.instituteService
      .getAllInstitutes()
      .subscribe((res) => (this.institutes = res));
  }

  renewLicense(institute: Institute) {
    const newKey = prompt('Enter new license key:');
    if (newKey) {
      this.instituteService
        .renewLicense(institute.id, newKey)
        .subscribe((_) => {
          alert('License renewed!');
          this.ngOnInit();
        });
    }
  }
}
