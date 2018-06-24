import { Component, OnInit, Output,EventEmitter,Input } from '@angular/core';

@Component({
  selector: 'app-modal-do-evento',
  templateUrl: './modal-do-evento.component.html',
  styleUrls: ['./modal-do-evento.component.css']
})
export class ModalDoEventoComponent implements OnInit {

   resultado: string = "Teste de Ajustes por Evento"
   @Input() message: string = "mensagem de boas vindas (Seja Bem Vindo)"

  @Output() eventos = new EventEmitter()

  constructor() { }

  ngOnInit() {
    this.eventos.emit(this.message)
  }
}
