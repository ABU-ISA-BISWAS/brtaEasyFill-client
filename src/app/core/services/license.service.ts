import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { License } from '../../shared/models/license.model';

@Injectable({ providedIn: 'root' })
export class LicenseService {
  private apiUrl = '/api/license';

  constructor(private http: HttpClient) {}

  getLicenseLogs(instituteId: number): Observable<License[]> {
    return this.http.get<License[]>(`${this.apiUrl}/logs/${instituteId}`);
  }
}
