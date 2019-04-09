import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppareilService {

  appareilsSubject = new Subject<any[]>();

  constructor(private httpClient: HttpClient){}

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
  addAppareil(name: string, status: string){
    const appareil = {
      id: 0,
      name: '',
      status: ''
    };
    appareil.name = name;
    appareil.status = status;
    appareil.id = this.appareils[this.appareils.length - 1].id + 1;
    this.appareils.push(appareil);
    this.emitAppareilSubject();
  }
  saveAppareilsToServer() {
    console.log('J\'ESSAYE DE ME CONNECTER !');
    this.httpClient
    .put('https://testangularmalik.firebaseio.com/appareils.json', this.appareils)
    .subscribe(
      () => {
        console.log('Enregistrement terminé !');
      },
      (error) => {
        console.log('Erreur ! : ' + error);
      }
    );
  }
  getAppareilsFromServer(){
    this.httpClient.get<any[]>('https://testangularmalik.firebaseio.com/appareils.json').subscribe(
      (response) => {
        this.appareils = response;
        this.emitAppareilSubject();
      },
      (error) => {
        console.log('Erreur ! :' + error);
      }
    );
  }

}
