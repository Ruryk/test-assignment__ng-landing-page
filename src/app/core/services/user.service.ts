import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';

// Models
import { IRegisterData, IUser } from '../interfaces/user.interfaces';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly httpClient: HttpClient = inject(HttpClient);

  register(formValue: IRegisterData): Observable<IUser> {
    return this.httpClient.post<IUser>('', formValue).pipe(
      tap(console.log),
      catchError((error) => throwError(error))
    );
  }
}
