import { Injectable } from '@angular/core';
import { User } from '../models/User.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class UserService {

  private users: User[] = [new User('Malik','ICMEN','malikicmen@gmail.com','IceTea',['coder','boire du café'])];
  userSubject = new Subject<User[]>();

  constructor() { }

  emitUsers(){
    this.userSubject.next(this.users.slice());
  }
  addUser(user: User){
    this.users.push(user);
    this.emitUsers();
  }
}
