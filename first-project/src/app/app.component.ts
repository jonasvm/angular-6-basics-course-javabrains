import { Component } from '@angular/core';
import { User } from './address-card/user.model';
import { TestService } from './test.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-Anjular-project';

  //aqui estamos instanciando o objeto user
  //o constructor não existia, foi inserido para isto

  //criando o objeto
  user: User;

  //para usar o input text
  inputText: string = "Initial Value";

  constructor(private svc: TestService, private http: HttpClient) {

    //usando o serviço - a mensagem vai aparecer no console do google chrome
    this.svc.printToConsole("Got the Service from the App.component");

    //setando as informações do usuário
    this.user = new User();
    this.user.name = "sanoj";
    this.user.designation = "Software Developer";
    this.user.address = "123 Main Street, City, State, 1000010";
    this.user.phone = [
      '123-123-123',
      '456-456-456',
      '789-789-789'
    ];
  };

  ngOnInit(){
   let obs = this.http.get('https://api.github.com/users/koushikkothagal');
   //obs.subscribe(() => console.log('Got the Response from HTTP Get!')); 
   obs.subscribe((response) => console.log(response)); 
  }
}


