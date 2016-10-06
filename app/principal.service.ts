import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class PrincipalService {

    URL = 'http://localhost:3004/';

    constructor (private http: Http) {}

    doGet(url, callback) {
        return this.http.get(this.URL+url)
          .subscribe(
              res => callback(res.json()),
              err => callback()
           );
    }

    getStatus(callback) {
        this.doGet('status', callback);
    }

    readCard(callback) {
        this.doGet('card', callback);
    }
}