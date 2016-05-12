import { bootstrap }    from '@angular/platform-browser-dynamic';

import { HTTP_PROVIDERS } from '@angular/http';
import { PrincipalService } from './principal.service';

import { AppComponent } from './app.component';

bootstrap(AppComponent, 
    [HTTP_PROVIDERS, PrincipalService]);