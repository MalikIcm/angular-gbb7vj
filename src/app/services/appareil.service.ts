import { Injectable } from '@angular/core';

@Injectable()
export class AppareilService {

  appareils = [
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

  SwitchOnAll() {
    this.appareils.forEach(a => a.status = 'allumé');
  }
  SwitchOffAll() {
    this.appareils.forEach(a => a.status = 'éteint');
  }
  SwitchInverse() {
    this.appareils.forEach(a => {
      if (a.status === 'allumé') {
        a.status = 'éteint';
      }
      else { a.status = 'allumé'; }
    });
  }
  SwitchOne(i: number) {
    if (this.appareils[i].status === 'allumé') {
      this.appareils[i].status = 'éteint';
      return;
    }
    else if (this.appareils[i].status === 'éteint') {
      this.appareils[i].status = 'allumé';
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