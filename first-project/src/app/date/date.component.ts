import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  message: string = "Hello";

  someNumber : number = 10;

  //a linha abaixo comentada pega a data do sistema e adiciona na variável
  //messageDate: string = currentDate.toDateString();

  //a daga foi alterada, para ser instanciada no construtor do componente, então abaixo 
  //foi somente declarada
  messageDate: string;

  //o construtor vem inicialmente vazio, mas pode ser usado para instanciar valores, etc
  constructor() {

    //da maneira abaixo, o código vai mostrar a data e a hora, mas para ter a hora atualizada
    //tem que dar F5 
    //let currentDate = new Date();
    //this.messageDate = currentDate.toDateString() + ' ' + currentDate.toLocaleTimeString();

    //se utilizar a propriedade setInterval, é possível estipular um tempo para ser acionado
    //sem precisar do F5
    setInterval(() => {
      let currentDate = new Date();
      this.messageDate = currentDate.toDateString() + ' ' + currentDate.toLocaleTimeString();
    }, 1000);

  }

  ngOnInit() {
  }

  //criação de um novo método
  addTwoNumbers(a: number, b: number){
    return a + b;
  } 

/*   //o typescript não aceita uma chamada de um método dentro do outro sem usar o this
  someOtherMethod(){
    this.addTwoNumbers(this.someNumber, 5);
  } */

}
