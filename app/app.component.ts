import { Component, ViewChild } from '@angular/core';
import 'rxjs/Rx';
import { PrincipalService } from './principal.service';
import { Message }  from 'primeng/primeng';

@Component({
  selector: 'app',
  templateUrl: 'app/app.html'
})
export class AppComponent {

    @ViewChild('branchInputField') branchInputField; 
    @ViewChild('pinInputField') pinInputField; 

    messages: Message[];
    card: any = {};

    constructor(private principalService : PrincipalService) { }

    ngOnInit() {
        this.principalService.onStatus().subscribe(
            res => {
                console.log('RECEIVED' + res);
                this.messages = [];
                this.messages.push(res);
                if (res['severity'] == "success") {
                    this.readCard();
                } else {
                    this.card = {};
                    this.branchInputField.nativeElement.focus();
                }
            }
        );
    }

    readCard() {
        this.principalService.readCard().then(
            res => { 
                console.log('CARD' + res);
                if (res) {
                    this.card = res;
                    this.pinInputField.nativeElement.focus();
                }
            }
        );
    }
}
