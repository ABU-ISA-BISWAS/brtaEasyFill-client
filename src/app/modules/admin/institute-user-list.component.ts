import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../shared/models/user.model';

@Component({
  selector: 'app-institute-user-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Institute Users</h2>
    <ul>
      <li *ngFor="let user of users">
        {{ user.username }} - {{ user.role }} - {{ user.status }}
      </li>
    </ul>
  `,
})
export class InstituteUserListComponent implements OnInit {
  @Input() instituteId!: number;
  users: User[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    if (this.instituteId) {
      this.http
        .get<User[]>(`/api/users?instituteId=${this.instituteId}`)
        .subscribe((res) => (this.users = res));
    }
  }
}
