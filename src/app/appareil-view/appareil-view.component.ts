import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.css']
})
export class AppareilViewComponent implements OnInit {

  appareils: any[];
  isAuth: false;

  lastUpdate = new Promise((resolve,reject)=>{
      const date = new Date();
      setTimeout(
        ()=>{
          resolve(date);
        },2000
      );
    });

  constructor(private appareilService: AppareilService) { }


  ngOnInit(){
    this.appareils = this.appareilService.appareils;
  }

  onAllumer(){
    this.appareilService.SwitchOnAll();
  }

  onEteindre(){
    
    if(confirm('Etes-vous sûr de vouloir tout éteindre ?')){
      this.appareilService.SwitchOffAll();
    }
    else{ return null; }
  }

}