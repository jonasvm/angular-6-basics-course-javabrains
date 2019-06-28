import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/test.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view-component',
  templateUrl: './view-component.component.html',
  styleUrls: ['./view-component.component.css']
})
export class ViewComponentComponent implements OnInit {

  //para funcionar o esquema de pegar o nome do usuário para fazer a chamada na API do Github
  //este username vem do que o usuário digitar na tela
  userName: string = "";
response: any;

  constructor(private svc: TestService, private http: HttpClient) {

    //usando o serviço - a mensagem vai aparecer no console do google chrome
    this.svc.printToConsole("Got the Service from inner view component");

  }

  ngOnInit() {
  }

  search() {
    this.http.get('https://api.github.com/users/' + this.userName)
    .subscribe((response) => {
      this.response = response;
      console.log(this.response);
    });
  }

}
