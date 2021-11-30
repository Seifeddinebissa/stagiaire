import { Injectable } from '@angular/core';
import { Stagiaire } from '../model/stagiaire.model';

@Injectable({
  providedIn: 'root'
})
export class StagiaireService {

  stagiaires : Stagiaire[];
  stagiaire : Stagiaire;

  constructor() { 
    this.stagiaires = [
      {idStagiaire : 1, nom : "Seif eddine", prenom : "bissa", cin : "14418805", societe : "Post", typeStage : "Perfectionnement", dateDeb : new Date("03/01/2022"), dateFin : new Date("03/02/2022")},
      {idStagiaire : 2, nom : "mohamed", prenom : "ben ali", cin : "06215402", societe : "Telecome", typeStage : "Initiation", dateDeb : new Date("03/01/2022"), dateFin : new Date("03/02/2022")}
    ];
  }

  listeStagiaires(): Stagiaire[] {
    return this.stagiaires;
   }

   ajouterStagiaire( stage: Stagiaire){
    this.stagiaires.push(stage);
    }

    supprimerStagiaire( stage: Stagiaire){
      
      /*const index = this.stagiaires.indexOf(stage, 0);
      if (index > -1) {
      this.stagiaires.splice(index, 1);
      }*/
      //ou Bien
       this.stagiaires.forEach((cur, index) => {
      if(stage.idStagiaire === cur.idStagiaire) {
      this.stagiaires.splice(index, 1);
      }
      }); 
      }

      consulterStagiaire(id:number): Stagiaire{
        this.stagiaire = this.stagiaires.find(s => s.idStagiaire == id);
        return this.stagiaire;
        }

        trierStagiaires(){
          this.stagiaires = this.stagiaires.sort((n1,n2) => {
          if (n1.idStagiaire > n2.idStagiaire) {
          return 1;
          }
          if (n1.idStagiaire < n2.idStagiaire) {
          return -1;
          }
          return 0;
          });
          }
          updateStagiaire(s:Stagiaire)
          {
          // console.log(p);
          this.supprimerStagiaire(s);
          this.ajouterStagiaire(s);
          this.trierStagiaires();
          }
          

        

        
       
    

}
