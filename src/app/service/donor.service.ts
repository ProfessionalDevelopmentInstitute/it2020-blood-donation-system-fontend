import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Donor} from '../model/donor.model';
import {Observable} from 'rxjs';
import {ResponseModel} from '../model/response.model';


@Injectable({
  providedIn: 'root'
})
export class DonorService {
  constructor(private httpClient: HttpClient) {
  }

  createDonor(donor: Donor): Observable<any> {
    return this.httpClient.post('http://localhost:8082/intern/donor', donor);
  }

  getDonor(): Observable<ResponseModel> {
    return this.httpClient.get<ResponseModel>('http://localhost:8082/intern/donors');
  }

  searchDonor(name: string): Observable<Donor[]> {
    return this.httpClient.get<Donor[]>('http://localhost:8082/intern/donors/name?name=' + name);
  }

  getDonorById(id: number): Observable<ResponseModel> {
    return this.httpClient.get<ResponseModel>('http://localhost:8082/intern/donor/' + id);
  }

  updateDonor(donor: Donor): Observable<any> {
    return this.httpClient.put('http://localhost:8082/intern/donor/', donor);
  }

  deleteDonorById(idToDelete: number): Observable<any> {
    return this.httpClient.delete('http://localhost:8082/intern/donor/' + idToDelete);
  }

  findByBloodTypeAndAvailableDate(bloodType: string): Observable<Donor[]> {
    return this.httpClient.get<Donor[]>('http://localhost:8082/intern/donors/bloodTypeAndAvailableDate?bloodType=' + bloodType);
  }
}
