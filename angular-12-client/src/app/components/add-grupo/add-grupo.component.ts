import { Component, OnInit } from '@angular/core';
import { Grupo } from 'src/app/models/grupo.model';
import { GrupoService } from 'src/app/services/grupo.service';

@Component({
  selector: 'app-add-grupo',
  templateUrl: './add-grupo.component.html',
  styleUrls: ['./add-grupo.component.css']
})
export class AddGrupoComponent implements OnInit {

  grupo: Grupo = {
    nombre: '',
    curso: '',
    integrantes: 0,
    published: false
  };
  submitted = false;

  constructor(private grupoService: GrupoService) { }

  ngOnInit(): void {
  }

  saveGrupo(): void {
    const data = {
      nombre: this.grupo.nombre,
      curso: this.grupo.curso,
      integrantes: this.grupo.integrantes,
    };

    this.grupoService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newGrupo(): void {
    this.submitted = false;
    this.grupo = {
      nombre: '',
      curso: '',
      integrantes: 0,
      published: false
    };
  }

}
