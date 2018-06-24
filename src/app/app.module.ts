import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ModalComponent } from './modal/modal.component';
import { DialogService } from 'ng2-bootstrap-modal/dist/dialog.service';
import { ModalDoEventoComponent } from './modal-do-evento/modal-do-evento.component';


@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    ModalComponent,
    ModalDoEventoComponent,
  ],
  imports: [
    BootstrapModalModule,
    BrowserModule
  ],
  entryComponents: [
    ModalComponent
  ],
  providers: [DialogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
