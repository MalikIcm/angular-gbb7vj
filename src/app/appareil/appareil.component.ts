import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core'; 
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName: string;
  @Input() appareilStatus: string;
  @Input() id: number;
  @Input() idAppareil: number;

  constructor(private appareilService: AppareilService) {  }

  ngOnInit(){
  }


  getStatus(){
    return this.appareilStatus;
  }
  getName(){
    return this.appareilName;
  }
  getColor(){
    if(this.appareilStatus === 'allumé'){
      return 'green';
    }
    else if(this.appareilStatus === 'éteint'){ 
      return 'red';
      }
  }
  
  onSwitch(){
    this.appareilService.SwitchOne(this.id);
  }
  
}