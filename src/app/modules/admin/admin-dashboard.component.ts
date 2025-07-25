import { Component, OnInit } from '@angular/core';
import { InstituteService } from '../../core/services/institute.service';

import { CommonModule } from '@angular/common';

import { InstituteListComponent } from './institute-list.component'; // Import child component

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, InstituteListComponent],
  template: `
    <h1>Super Admin Panel</h1>
    <app-institute-list></app-institute-list>
  `,
})
export class AdminDashboardComponent implements OnInit {
  constructor(private instituteService: InstituteService) {}
  ngOnInit() {}
}
