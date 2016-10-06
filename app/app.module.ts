import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { FieldsetModule, InputTextModule, PasswordModule, ButtonModule, MessagesModule } from 'primeng/primeng';

import { PrincipalService } from './principal.service';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule,
                  FieldsetModule, InputTextModule, PasswordModule, ButtonModule, MessagesModule ],
  declarations: [ AppComponent ],
  providers:    [ PrincipalService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }