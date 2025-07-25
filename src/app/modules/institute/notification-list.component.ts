import { CommonModule, DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { NotificationService } from '../../core/services/notification.service';
import { Notification } from '../../shared/models/notification.model';

@Component({
  selector: 'app-notification-list',
  standalone: true,
  imports: [CommonModule, DatePipe],
  template: `
    <h3>Notifications</h3>
    <ul *ngIf="notifications.length; else noNotes">
      <li *ngFor="let note of notifications">
        {{ note.message }} - {{ note.createdAt | date : 'short' }}
      </li>
    </ul>
    <ng-template #noNotes>
      <span>No notifications</span>
    </ng-template>
  `,
})
export class NotificationListComponent implements OnInit {
  @Input() instituteId!: number;
  @Input() userId!: number;
  notifications: Notification[] = [];

  constructor(private notificationService: NotificationService) {}

  ngOnInit() {
    if (this.instituteId && this.userId) {
      this.notificationService
        .getNotifications(this.instituteId, this.userId)
        .subscribe((notes) => (this.notifications = notes));
    }
  }
}
