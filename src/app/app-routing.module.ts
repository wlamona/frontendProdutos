import { PublicacaoDetailsComponent } from './publicacao-details/publicacao-details.component';
import { CreatePublicacaoComponent } from './create-publicacao/create-publicacao.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicacaoListComponent } from './publicacao-list/publicacao-list.component';
import { UpdatePublicacaoComponent } from './update-publicacao/update-publicacao.component';

const routes: Routes = [
  { path: '', redirectTo: 'publicacao', pathMatch: 'full' },
  { path: 'publicacoes', component: PublicacaoListComponent },
  { path: 'add', component: CreatePublicacaoComponent },
  { path: 'update/:id', component: UpdatePublicacaoComponent },
  { path: 'details/:id', component: PublicacaoDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
