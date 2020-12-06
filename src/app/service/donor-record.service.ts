import { Injectable } from '@angular/core';
import {DonorRecord} from '../model/donorReord.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ResponseModel} from '../model/response.model';

@Injectable({
  providedIn: 'root'
})
export class DonorRecordService {

  constructor(private httpClient: HttpClient) { }

  createDonorRecord(donorRecord: DonorRecord): Observable<any>  {
    return this.httpClient.post('http://localhost:8082/intern/donorRecord', donorRecord);
  }

  getDonorRecord(): Observable<ResponseModel>  {
    return this.httpClient.get<ResponseModel>('http://localhost:8082/intern/donorRecords');
  }

  getDonorRecordById(id: number): Observable<ResponseModel>  {
    return this.httpClient.get<ResponseModel>('http://localhost:8082/intern/donorRecord/' + id);
  }

  deleteDonorRecordById(idToDelete: number): Observable<any> {
    return this.httpClient.delete('http://localhost:8082/intern/donorRecord/' + idToDelete);
  }
}
