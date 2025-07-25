import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Institute } from '../../shared/models/institute.model';

@Injectable({ providedIn: 'root' })
export class InstituteService {
  private apiUrl = '/api/institute';

  constructor(private http: HttpClient) {}

  getAllInstitutes(): Observable<Institute[]> {
    return this.http.get<Institute[]>(`${this.apiUrl}/all`);
  }

  createInstitute(data: Institute): Observable<Institute> {
    return this.http.post<Institute>(`${this.apiUrl}/create`, data);
  }

  renewLicense(id: number, newKey: string): Observable<Institute> {
    return this.http.post<Institute>(
      `${this.apiUrl}/renew-license/${id}`,
      newKey,
      {
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}
