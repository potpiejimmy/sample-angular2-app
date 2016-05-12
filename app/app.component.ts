import { Component } from '@angular/core';
import 'rxjs/Rx';
import { PrincipalService } from './principal.service';

@Component({
  selector: 'app',
  template: `
    <h1>Addresses:</h1>
    <h3>{{label}}</h3>
    <ul>  
      <li *ngFor="let user of users">
        {{ user.mail }}
      </li>
    <ul>
  `
})
export class AppComponent {
    label = 'Loading data...';
    users = [];

    constructor(private principalService : PrincipalService) { }

    ngOnInit() {
        this.loadDetails();
    }

    loadDetails() {
        this.principalService.getUsers(
            res => {
                this.users = res;
                this.label = '';
            });
    }
}
