import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Customer } from '../Interfaces/Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private defaultURL: string = environment.defaultURL;
  private apiURL:string = this.defaultURL + "Customer/";

  constructor(private httpClient: HttpClient) { }

  getList():Observable<Customer[]>{
    return this.httpClient.get<Customer[]>(`${this.apiURL}`);
  }

  add(model:Customer):Observable<Customer>{
    return this.httpClient.post<Customer>(`${this.apiURL}`, model);
  }

  update(customerId: number, model:Customer):Observable<Customer>{
    console.log(model);
    return this.httpClient.put<Customer>(`${this.apiURL}${customerId}`, model);
  }

  delete(customerId: number):Observable<void>{
    return this.httpClient.delete<void>(`${this.apiURL}${customerId}`);
  }

}
