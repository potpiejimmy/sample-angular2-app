import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class PrincipalService {

    URL = 'localhost:3004/';

    constructor (private http: Http) {}

    doGet(url) {
        return this.http.get('http://'+this.URL+url)
               .map(res => res.json())
               .toPromise();
    }

    onEvent(url) {
        let ws = new WebSocket('ws://'+this.URL+url);
        return new Observable(observer => {
            ws.onmessage = event => {
                observer.next(JSON.parse(event.data));
            };
            ws.onerror = err => {
                observer.error(err);
            };
            ws.onclose = () => {
                observer.complete();
            }
        });
    }

    onStatus() {
        return this.onEvent('status');
    }

    readCard() {
        return this.doGet('card');
    }
}