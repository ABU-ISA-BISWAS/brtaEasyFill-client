import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { User } from '../../shared/models/user.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private user: User | null = null;
  private tokenKey = 'auth_token';
  private userKey = 'user';

  constructor(private http: HttpClient) {
    // Restore user from localStorage on service init
    const userData = localStorage.getItem(this.userKey);
    this.user = userData ? JSON.parse(userData) : null;
  }

  // Example login API: expects { username, password }, returns { token, user }
  login(username: string, password: string): Observable<any> {
    return this.http.post<any>('/api/auth/login', { username, password }).pipe(
      tap((res) => {
        if (res && res.token && res.user) {
          localStorage.setItem(this.tokenKey, res.token);
          localStorage.setItem(this.userKey, JSON.stringify(res.user));
          this.user = res.user;
        }
      })
    );
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.userKey);
    this.user = null;
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.tokenKey);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  getCurrentUser(): User | null {
    if (this.user) return this.user;
    const userData = localStorage.getItem(this.userKey);
    return userData ? (JSON.parse(userData) as User) : null;
  }

  hasRole(role: string): boolean {
    const user = this.getCurrentUser();
    return !!user && user.role === role;
  }
}
