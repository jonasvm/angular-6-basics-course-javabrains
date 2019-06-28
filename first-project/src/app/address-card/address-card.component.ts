import { Component, OnInit, Input } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {

  //este user abaixo era usado no hardcoded
  //user: any;

  //esta notação @Input() permite que um valor venha do app.component.html ou outra página qualquer
  //a linha abaixo, usa somente uma variável como input
  //@Input('name') userName: string;

  //mas seguindo a mesma ideia, é possível passar um objeto completo (que neste caso é user.model.ts)
  @Input('user') user: User;

  //criando a flag usada na funcionalidade de esconder o cartão 
  isCollapsed: boolean = true;

  constructor() {

    //o construtor é invocado quando o objeto é criado (o seletor do componente é utilizado)
    //depois de construido, o ngOnInit é invocado na sequencia, por isso o objeto user mudou para lá

    //o user estava dentro do construtor, mas depois que foi adicionado 
    //o nome vindo por parametro, mudou para onInit
    //se não mudar, o mesmo código, exatamente, não funciona (não mostra o nome)
  }

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }

  //pesquisar lifecycle hooks para entender o ciclo de vida destes caras
  ngOnInit() {

    //o userName, vem do arquivo app.component.html
    // this.user = {
    //   name: this.userName,
    //   title: 'Software Developer',
    //   address: '123 Main Street, City, State, 1000010',
    //   phone: [
    //     '123-123-123',
    //     '456-456-456',
    //     '789-789-789'
    //   ]
    // };


    this.user = {
      name: this.user.name,
      designation: this.user.designation,
      address: this.user.address,
      phone: this.user.phone
    };

  }

}
