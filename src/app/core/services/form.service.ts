import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FormModel } from '../models/form.model';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  private baseUrl = 'http://localhost:8080/api/forms';

  constructor(private http: HttpClient) {}

  getForms(): Observable<FormModel[]> {
    return this.http.get<FormModel[]>(this.baseUrl);
  }

  createForm(data: FormModel): Observable<FormModel> {
    return this.http.post<FormModel>(this.baseUrl, data);
  }

  updateForm(id: number, data: FormModel): Observable<FormModel> {
    return this.http.put<FormModel>(`${this.baseUrl}/${id}`, data);
  }

  deleteForm(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  // --- NEW ---
  getA4PdfBlob(id: number): Observable<Blob> {
    return this.http.get(`${this.baseUrl}/${id}/pdf/a4`, {
      responseType: 'blob',
    });
  }

  getLegalPdfBlob(id: number): Observable<Blob> {
    return this.http.get(`${this.baseUrl}/${id}/pdf/legal`, {
      responseType: 'blob',
    });
  }
}
