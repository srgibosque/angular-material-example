import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CardsComponent } from './components/cards/cards.component';

const routes: Routes = [
  {
    path: '', component: LoginComponent
  },

  {
    path: 'cards', component: CardsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
