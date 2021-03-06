import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppareilService } from '../services/appareil.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.css']
})
export class AppareilViewComponent implements OnInit, OnDestroy {

  appareils: any[];
  appareilSubscription: Subscription;

  lastUpdate = new Promise((resolve,reject)=>{
      const date = new Date();
      setTimeout(
        ()=>{
          resolve(date);
        },2000
      );
    }
  );

  constructor(private appareilService: AppareilService) { }


  ngOnInit(){
    this.appareilService.getAppareilsFromServer();
    this.appareilSubscription = this.appareilService.appareilsSubject.subscribe(
      (appareils: any[]) => {
        this.appareils = appareils;
      }
    );
    
    this.appareilService.emitAppareilSubject();
  }
  ngOnDestroy(){
    this.appareilService.saveAppareilsToServer();
    this.appareilSubscription.unsubscribe();
  }
  onAllumer(){
    this.appareilService.SwitchOnAll();
    this.appareilService.saveAppareilsToServer();
  }
  onEteindre(){
    if(confirm('Etes-vous sûr de vouloir tout éteindre ?')){
      this.appareilService.SwitchOffAll();
      this.appareilService.saveAppareilsToServer();
    }
    else{ return null; }
  }
  onSave(){
    this.appareilService.saveAppareilsToServer();
  }
  onFetch(){
    this.appareilService.getAppareilsFromServer();
  }
}
