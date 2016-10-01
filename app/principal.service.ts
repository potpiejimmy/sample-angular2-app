import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class PrincipalService {

    constructor (private http: Http) {}

    getStatus(callback) {
        return this.http.get('/pcsc/status')
          .map(res => res.json())
          .toPromise()
          .then(callback);
    }
}