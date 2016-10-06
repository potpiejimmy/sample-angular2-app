import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class PrincipalService {

    URL = 'localhost:3004/';

    constructor (private http: Http) {}

    doGet(url, callback) {
        return this.http.get('http://'+this.URL+url)
          .subscribe(
              res => callback(res.json()),
              err => callback()
           );
    }

    onStatus(callback) {
        var ws = new WebSocket('ws://'+this.URL+'status');
        ws.onmessage = event => {
            console.log('RECEIVED' + event.data);
            callback(JSON.parse(event.data));
        };
    }

    readCard(callback) {
        this.doGet('card', callback);
    }
}