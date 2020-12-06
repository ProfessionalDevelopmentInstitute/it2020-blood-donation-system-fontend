import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {UserModel} from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) {
  }

  public getAll(): Observable<UserModel[]> {
    return this.httpClient.get<UserModel[]>(environment.baseUrl + '/user');
  }

}
