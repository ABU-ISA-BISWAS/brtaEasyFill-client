import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Notification } from '../../shared/models/notification.model';

@Injectable({ providedIn: 'root' })
export class NotificationService {
  private apiUrl = '/api/notification';

  constructor(private http: HttpClient) {}

  getNotifications(
    instituteId: number,
    userId: number
  ): Observable<Notification[]> {
    return this.http.get<Notification[]>(
      `${this.apiUrl}/list?instituteId=${instituteId}&userId=${userId}`
    );
  }
}
