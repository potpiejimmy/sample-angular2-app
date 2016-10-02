import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class PrincipalService {

    URL = 'http://localhost:3004/';

    constructor (private http: Http) {}

    getStatus(callback) {
        return this.http.get(this.URL+'status')
          .map(res => res.json()).toPromise()
          .then(callback);
    }

    readCard(callback) {
        return this.http.get(this.URL+'card')
          .map(res => res.json()).toPromise()
          .then(callback);
    }
}