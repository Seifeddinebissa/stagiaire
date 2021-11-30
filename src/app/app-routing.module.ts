import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StagiaireComponent } from './stagiaire/stagiaire.component';
import { AddStagiaireComponent } from './add-stagiaire/add-stagiaire.component';
import { UpdateStagiaireComponent } from './update-stagiaire/update-stagiaire.component';

const routes: Routes = [
  { path : "stagiaire" , component : StagiaireComponent },
  { path : "add-stagiaire" , component : AddStagiaireComponent },
  { path : "" , redirectTo : "stagiaire" , pathMatch : "full" },
  { path : "updateStagiaire/:id" , component : UpdateStagiaireComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
