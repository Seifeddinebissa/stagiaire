import { Component, OnInit } from '@angular/core';
import { Stagiaire } from '../model/stagiaire.model';
import { StagiaireService } from '../services/stagiaire.service';

@Component({
  selector: 'app-add-stagiaire',
  templateUrl: './add-stagiaire.component.html'
})
export class AddStagiaireComponent implements OnInit {

  newStagiaire = new Stagiaire();

  constructor( private stagiaireService : StagiaireService ) { }

  addStagiaire(){
    //console.log(this.newStagiaire);
    this.stagiaireService.ajouterStagiaire(this.newStagiaire);
    }
    

  ngOnInit(): void {
  }

}
