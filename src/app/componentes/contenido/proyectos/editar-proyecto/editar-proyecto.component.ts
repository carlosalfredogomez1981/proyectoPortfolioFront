import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { proyecto } from 'src/app/model/proyecto.model';
import { SproyectoService } from 'src/app/servicios/sproyecto.service';

@Component({
  selector: 'app-editar-proyecto',
  templateUrl: './editar-proyecto.component.html',
  styleUrls: ['./editar-proyecto.component.css']
})
export class EditarProyectoComponent implements OnInit {
  proye: proyecto = null;

  constructor(
    private sProyecto: SproyectoService,
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id']; 
    this.sProyecto.detail(id).subscribe(
      data => {
        this.proye = data;
      },
      err => {
        alert('error al modificar experiencia');
        this.router.navigate(['proyectos']);
      }
    );
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sProyecto.update(id, this.proye).subscribe(
    data => {
        this.router.navigate(['proyectos']);
      },
      err => {
        alert('error al modificar');
        this.router.navigate(['proyectos']);
      }
    );
  }


}
