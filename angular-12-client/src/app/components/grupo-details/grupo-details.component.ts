import { Component, OnInit } from '@angular/core';
import { GrupoService } from 'src/app/services/grupo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Grupo } from 'src/app/models/grupo.model';

@Component({
  selector: 'app-grupo-details',
  templateUrl: './grupo-details.component.html',
  styleUrls: ['./grupo-details.component.css']
})
export class GrupoDetailsComponent implements OnInit {

  currentGrupo: Grupo = {
    nombre: '',
    curso: '',
    integrantes: 0,
    published: false
  };
  message = '';

  constructor(
    private grupoService: GrupoService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getGrupo(this.route.snapshot.params.id);
  }

  getGrupo(id: string): void {
    this.grupoService.get(id)
      .subscribe(
        data => {
          this.currentGrupo = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updatePublished(status: boolean): void {
    const data = {
      nombre: this.currentGrupo.nombre,
      curso: this.currentGrupo.curso,
      integrantes: this.currentGrupo.integrantes,
      published: status
    };

    this.message = '';

    this.grupoService.update(this.currentGrupo.id, data)
      .subscribe(
        response => {
          this.currentGrupo.published = status;
          console.log(response);
          this.message = response.message ? response.message : 'The status was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  updateGrupo(): void {
    this.message = '';

    this.grupoService.update(this.currentGrupo.id, this.currentGrupo)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message ? response.message : 'This Grupo was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deleteGrupo(): void {
    this.grupoService.delete(this.currentGrupo.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/grupos']);
        },
        error => {
          console.log(error);
        });
  }
}
