import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Formulario } from './formulario.model';
import { DialogService } from 'ng2-bootstrap-modal';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  testes = "Dados de Teste Por Propertibind"
  formulario?: Formulario[] = [
    {

    nome:"teste 1",
    dados:"mais informacoes"

  },
  {    
    nome:"teste 2",
    dados:"mais informacoes Concretas"

  },
  {
    nome:"teste 3",
    dados:"mais informacoes Acabadas"
  }]
  dados: Formulario[] = [
    {

    nome:"teste 4",
    dados:"mais informacoes"

  },
  {    
    nome:"teste 5",
    dados:"mais informacoes Concretas"

  },
  {
    nome:"teste 6",
    dados:"mais informacoes Acabadas"
  }]

  constructor(private dialogService: DialogService) { }

  ngOnInit() {
  }

  testeModal(title: Formulario){
    
    let dados = this.dialogService.addDialog(
      ModalComponent, 
      {
        title: title.nome,
        message: title.dados
      })
      .subscribe((isConfirmed)=>{
          //We get dialog result
          if(isConfirmed) {
              alert(title.dados);
          }
          else {
              this.dialogService.removeAll()
          }
      });

  }
  emitirevento(event){

    console.log(event)


  }
}
