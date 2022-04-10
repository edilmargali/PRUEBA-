import { Component, OnInit } from '@angular/core';
import { Grupo } from 'src/app/models/grupo.model';
import { GrupoService } from 'src/app/services/grupo.service';

@Component({
  selector: 'app-grupo-list',
  templateUrl: './grupo-list.component.html',
  styleUrls: ['./grupo-list.component.css']
})
export class GrupoListComponent implements OnInit {

  grupo?: Grupo[];
  currentGrupo: Grupo = {};
  currentIndex = -1;
  nombre = '';


  constructor(private grupoService: GrupoService) { }

  ngOnInit(): void {
    this.retrieveGrupos();
  }

  retrieveGrupos(): void {
    this.grupoService.getAll()
      .subscribe(
        data => {
          this.grupo = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveGrupos();
    this.currentGrupo = {};
    this.currentIndex = -1;
  }

  setActiveGrupos(grupo: Grupo, index: number): void {
    this.currentGrupo = grupo;
    this.currentIndex = index;
  }

  removeAllGrupos(): void {
    this.grupoService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }

  searchTitle(): void {
    this.currentGrupo = {};
    this.currentIndex = -1;

    this.grupoService.findByTitle(this.nombre)
      .subscribe(
        data => {
          this.grupo = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });


  }



}
