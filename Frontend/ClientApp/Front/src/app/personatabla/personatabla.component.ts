import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ColDef, IAfterGuiAttachedParams, ICellRendererParams } from 'ag-grid-community';
import { ApiService } from '../shared/services/api.service';

@Component({
  selector: 'app-personatabla',
  templateUrl: './personatabla.component.html',
  styleUrls: ['./personatabla.component.css']
})
export class PersonaTablaComponent implements OnInit {

  @Input() cell: any;
  @Output() onClicked = new EventEmitter<boolean>();
  
  rowData = [];

  columnDefs: ColDef[] = [
    { width: 600, resizable: true, field: 'Nombre' },
    { width: 175, resizable: true, field: 'Apellido' },
    { width: 175, field: 'Telefono' },
    { width: 175, field: 'Direccion' },
    { width: 175, field: 'Correo' },
    { width: 175, field: 'Fecha' },
];


  constructor(public api: ApiService) {
   
  }

   ngOnInit() {

    this.api.getAllUsers().subscribe(users => {
      this.rowData = users.json()
    })  

  
}

modificarbutton() {
  
  const anchor = '<button style="height: 21px" (click)="click()" class="btn btn-info">Click Me</button>'
  return anchor
}


  modificar(id:number) {

  }

  eliminar(id: number) {
      console.log(id)
      
  }

 



}

 


