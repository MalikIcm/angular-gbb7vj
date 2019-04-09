import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

//import { AppRoutingModule }     from './app-routing.module';

//////////Component du tuto, a ignorer////////////////////////
import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { HeroesComponent }      from './heroes/heroes.component';
import { HeroSearchComponent }  from './hero-search/hero-search.component';
import { MessagesComponent }    from './messages/messages.component';
///////////////////////////////////////////////////////////////

//Mes Components
import { AppareilComponent } from './appareil/appareil.component';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';

//Mes Services
import { AppareilService } from './services/appareil.service';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';


//Mes Routes
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';


const appRoutes: Routes = [
  {path:'appareils',canActivate: [AuthGuardService], component:AppareilViewComponent},
  {path:'appareils/:id',canActivate: [AuthGuardService], component:SingleAppareilComponent},
  {path:'auth', component: AuthComponent},
  {path:'not-found',component: FourOhFourComponent},
  {path:'**',redirectTo: 'not-found'},
  {path:'', component: AppareilViewComponent}
];


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    //AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers:[
    AppareilService,
    AuthService,
    AuthGuardService
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    HeroSearchComponent,
    AppareilComponent,
    AuthComponent,
    AppareilViewComponent,
    SingleAppareilComponent,
    FourOhFourComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
