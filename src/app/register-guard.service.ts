import { Injectable } from '@angular/core';
import { CanActivate,ActivatedRouteSnapshot,Router } from '@angular/router';

@Injectable()

export class RegisterGuardService implements CanActivate {
    token: string;
    role: string;

    constructor(private router: Router){}

    canActivate(route: ActivatedRouteSnapshot) : boolean {
        this.token = localStorage.getItem('TOKEN_NUMBER');
        this.role = localStorage.getItem('ROLE_TYPE');

        if(this.token !== null && this.role === 'admin'){
            return true;
        }else{
            this.router.navigate(['/login']);
            return false;
        }
    }
}