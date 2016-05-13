import { Component } from '@angular/core';
import 'rxjs/Rx';
import { PrincipalService } from './principal.service';
import { DataTable } from 'primeng/primeng';
import { Column } from 'primeng/primeng';

@Component({
  selector: 'app',
  directives: [DataTable,Column],
  templateUrl: 'app/app.html'
})
export class AppComponent {
    label = 'Loading data...';
    data = null;
    users = [];

    constructor(private principalService : PrincipalService) { }

    ngOnInit() {
        this.loadDetails();
    }

    loadDetails() {
        this.principalService.getUsers(
            res => {
                this.data = res;
                this.users = JSON.parse(res);
                this.label = 'Received:';
            });
    }
}
