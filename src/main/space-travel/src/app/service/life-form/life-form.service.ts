import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LifeFormService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get('http://localhost:8080/getLifeForm');
  }

  getLatest(): Observable<any> {
    return this.http.get('http://localhost:8080/getLatestLifeForm');
  }
}
