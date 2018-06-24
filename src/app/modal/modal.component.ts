import { Component, OnInit } from '@angular/core';
import { DialogService } from 'ng2-bootstrap-modal/dist/dialog.service';
import { DialogComponent } from 'ng2-bootstrap-modal';
import { IFormulario } from '../formulario/Iformulario.interface';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})


export class ModalComponent extends DialogComponent<IFormulario , boolean> implements IFormulario  {
  title: string;
  message: string;

  constructor(dialogService: DialogService) {
    super(dialogService);
  }
  confirm() {
    // we set dialog result as true on click on confirm button, 
    // then we can get dialog result from caller code 
    this.result = true;
    this.close();
  }
}
