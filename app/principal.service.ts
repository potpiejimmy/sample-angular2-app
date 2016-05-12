import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class PrincipalService {

    constructor (private http: Http) {}

    getUsers(consumer) {
        return this.http.get('/rest/dummydata.json')
          .map(res => res.json())
          .toPromise()
          .then(consumer);
    }
}