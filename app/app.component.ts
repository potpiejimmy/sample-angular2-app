import { Component } from '@angular/core';
import { Http, HTTP_PROVIDERS } from '@angular/http';

@Component({
  selector: 'app',
  providers: [HTTP_PROVIDERS],
  template: `
    <h1>Result:</h1>
    <h3>{{dynresult}}</h3>
  `
})
export class AppComponent implements OnInit {
    dynresult = 'Loading details...';

    constructor(private http: Http) { }

    ngOnInit() {
        this.loadDetails();
    }

    loadDetails() {
        this.http.get('/rest/dummydata.json')
          .subscribe(
            res => { this.dynresult = res.json()['mail']},
            err => console.error(err),
            () => console.log('done')
        );
    }
}
