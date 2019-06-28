import { Injectable } from '@angular/core';

//esta notação @Injectable é o que diz ao angular que isto é um serviço
@Injectable({
  providedIn: 'root'
})
export class TestService {

  printToConsole(arg) {
    console.log(arg);
  }

  //constructor() { }
}
