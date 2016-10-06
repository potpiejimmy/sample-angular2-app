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
    lastPoll;

    constructor(private principalService : PrincipalService) { }

    ngOnInit() {
        this.pollStatus();
    }

    pollStatus() {
        this.lastPoll = Date.now();
        this.principalService.getStatus(
            res => {
                this.messages = [];
                if (res) {
                    this.messages.push(res);
                    if (res.severity != "error") {
                        this.pollStatus();
                        if (res.severity == "success") {
                            this.readCard();
                        } else {
                            this.card = {};
                            this.branchInputField.nativeElement.focus();
                        }
                    }
                } else {
                    // error condition:
                    if (Date.now() - this.lastPoll < 3000) {
                        this.messages.push({severity:"error",summary:"Error",detail:"Could not connect to card service."});
                    } else {
                        this.pollStatus();
                    }
                }
            }
        );
    }

    readCard() {
        console.log("READ CARD");
        this.principalService.readCard(
            res => { 
                if (res) {
                    this.card = res;
                    this.pinInputField.nativeElement.focus();
                }
            }
        );
    }
}
