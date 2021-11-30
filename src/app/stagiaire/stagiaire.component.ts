import { importType } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Stagiaire } from '../model/stagiaire.model';
import { StagiaireService } from '../services/stagiaire.service';

@Component({
  selector: 'app-stagiaire',
  templateUrl: './stagiaire.component.html'
})
export class StagiaireComponent implements OnInit {

  stagiaires : Stagiaire[];

  constructor( private stagiaireService : StagiaireService ) {
    
      this.stagiaires = stagiaireService.listeStagiaires();
  
   }

   supprimerStagiaire(s: Stagiaire)
{
  let conf = confirm("Etes-vous sûr ?");
  if (conf)
     this.stagiaireService.supprimerStagiaire(s);

}



  ngOnInit(): void {
  }

}
