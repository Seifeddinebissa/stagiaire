import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { StagiaireService } from '../services/stagiaire.service';
import { Stagiaire } from '../model/stagiaire.model';

@Component({
  selector: 'app-update-stagiaire',
  templateUrl: './update-stagiaire.component.html',
  styles: [
  ]
})
export class UpdateStagiaireComponent implements OnInit {

  currentStagiaire = new Stagiaire();

  constructor(private activatedRoute: ActivatedRoute,
    private router :Router,
    private stagiaireService: StagiaireService) { }

  ngOnInit(): void {
    this.currentStagiaire = this.stagiaireService.consulterStagiaire(this.activatedRoute.snapshot.params.id);
    console.log(this.currentStagiaire);

  }

  updateStagiaire()
{ 
this.stagiaireService.updateStagiaire(this.currentStagiaire);
this.router.navigate(['stagiaire']);
}



}
