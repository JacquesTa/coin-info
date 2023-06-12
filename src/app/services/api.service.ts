import { Injectable } from '@angular/core';
import { delay, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  isLoggedIn = false;
  redirectUrl!: string;
  constructor() {}

  login(): Observable<boolean> {
    this.redirectUrl = 'dashboard';
    return of(true).pipe(
      delay(1000),
      tap((val) => (this.isLoggedIn = true))
    );
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
