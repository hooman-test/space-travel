import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Shuttle} from '../../entity/Shuttle';

@Injectable({
  providedIn: 'root'
})
export class ShuttleService {

  constructor(private http: HttpClient) {
  }

  getShuttle(): Observable<any> {
    return this.http.get<Array<Shuttle>>('http://localhost:8080/shuttle');
  }

  assignLatest(): Observable<any> {
    return this.http.get('http://localhost:8080/assignLatest');
  }
}
