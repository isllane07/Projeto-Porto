import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';  // Importando ReactiveFormsModule
import { AppComponent } from './app.component';
import { DoadorComponent } from './doador/doador.component';  // Importando DoadorComponent
import { DoadorService } from './doador.service';  // Importando DoadorService

@NgModule({
  declarations: [
    AppComponent,    // Registrando o AppComponent
    DoadorComponent  // Registrando o DoadorComponent
  ],
  imports: [
    BrowserModule,       // Necessário para rodar o Angular
    ReactiveFormsModule  // Necessário para formularios reativos
  ],
  providers: [DoadorService],  // Registrando o DoadorService
  bootstrap: [AppComponent]  // Componente raiz
})
export class AppModule { }
