import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
    private http: HttpClient
  ) { }

  register(data: RegisterRequest) {
    return this.http.post('auth/register', data).pipe(
      map((response: any) => {
        return response;
      })
    );
  }
}


export type RegisterRequest = {
  name: string;
  surname: string;
  email: string;
  password: string;
};