import { Injectable } from '@angular/core';
import { RegisterModal } from './register.model';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class RegisterService {

    private url: string = 'http://localhost:5000/api/auth/register';

    constructor(private http: HttpClient){}

    registerUser(rUser: RegisterModal){
        return this.http.post(this.url, rUser);
    }
    
}