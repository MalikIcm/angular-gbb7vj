import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AppareilService {

  appareilsSubject = new Subject<any[]>();

  private appareils = [
    {
      id: 1,
      name: 'Machine a laver',
      status: 'éteint'
    },
    {
      id: 2,
      name: 'Machine a café',
      status: 'allumé'
    },
    {
      id: 3,
      name: 'Lave linge',
      status: 'éteint'
    },
    {
      id: 4,
      name: 'Sèche-linge',
      status: 'éteint'
    },
    {
      id: 5,
      name: 'Four',
      status: 'allumé'
    }
  ];

  emitAppareilSubject() {
    this.appareilsSubject.next(this.appareils.slice());
  }
  SwitchOnAll() {
    this.appareils.forEach(a => a.status = 'allumé');
    this.emitAppareilSubject();
  }
  SwitchOffAll() {
    this.appareils.forEach(a => a.status = 'éteint');
    this.emitAppareilSubject();
  }
  SwitchInverse() {
    this.appareils.forEach(a => {
      if (a.status === 'allumé') {
        a.status = 'éteint';
      }
      else { a.status = 'allumé'; }
    });
    this.emitAppareilSubject();
  }
  SwitchOne(i: number) {
    if (this.appareils[i].status === 'allumé') {
      this.appareils[i].status = 'éteint';
      this.emitAppareilSubject();
      return;
    }
    else if (this.appareils[i].status === 'éteint') {
      this.appareils[i].status = 'allumé';
      this.emitAppareilSubject();
      return;
    }
  }
  getAppareilById(id: number){
    const appareil = this.appareils.find(
      (s)=>{
        return s.id === id;
      }
    );
    return appareil;
  }

}
