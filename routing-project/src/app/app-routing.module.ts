import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SettingsProfileComponent } from './settings-profile/settings-profile.component';
import { SettingsContactComponent } from './settings-contact/settings-contact.component';

const routes: Route[] = [
  //o trecho abaixo comentado faz o redirecionamento para home, quando o usuário não digitar a rota
  //{path: '', component: HomeComponent },
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent },
  {
    path: 'settings', 
    component: SettingsComponent,
    children: [
      //no caso de um children, o redirect tem que ser sem /
      {path: '', redirectTo: 'profile', pathMatch: 'full' }, 
      {path: 'profile', component: SettingsProfileComponent},
      {path: 'contact', component: SettingsContactComponent},
      {path: '**', component: SettingsProfileComponent }
    ] 
  },
  //esse path:'**' é o que faz com que qualquer coisa não prevista seja redirecionada para a página de erro
  {path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
