import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {LoginService} from './login.service';
import {tap} from 'rxjs/operators';
import {LoginModel} from '../model/login.model';
import {UserModel} from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginManagerService {

  isAuth: Subject<boolean> = new Subject<boolean>();

  credential: string;
  userModel: UserModel;

  constructor(private loginService: LoginService) {
  }

  public signIn(login: LoginModel): Observable<any> {
    return this.loginService.signIn(login).pipe(
      tap(value => {
        this.credential = this.loginService.encrypt(login);
        localStorage.setItem('credential', this.credential);
        this.isAuth.next(true);
      })
    );
  }

  public sessionSignIn(): boolean {
    if (localStorage.hasOwnProperty('credential')) {
      this.credential = localStorage.getItem('credential');
      this.isAuth.next(true);
      return true;
    }
    return false;
  }

  public logOut(): void {
    this.isAuth.next(false);
    this.credential = null;
    localStorage.clear();
  }
}
