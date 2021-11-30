import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StagiaireComponent } from './stagiaire/stagiaire.component';
import { AddStagiaireComponent } from './add-stagiaire/add-stagiaire.component';
import { FormsModule } from '@angular/forms';
import { UpdateStagiaireComponent } from './update-stagiaire/update-stagiaire.component';

@NgModule({
  declarations: [
    AppComponent,
    StagiaireComponent,
    AddStagiaireComponent,
    UpdateStagiaireComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
