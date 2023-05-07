import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { proyecto } from 'src/app/model/proyecto.model';
import { SproyectoService } from 'src/app/servicios/sproyecto.service';

@Component({
  selector: 'app-nuevo-proyecto',
  templateUrl: './nuevo-proyecto.component.html',
  styleUrls: ['./nuevo-proyecto.component.css']
})
export class NuevoProyectoComponent implements OnInit{
 nombre: string = "";
 descripcion: string = "";
 urlProyecto: string = "";
 imgProyecto: string = "";

 constructor(private sproyecto: SproyectoService, private router: Router ){};

 ngOnInit():void{
  }

 onCreate(): void{
    const proyec = new proyecto(this.nombre, this.descripcion, this.urlProyecto, this.imgProyecto);
    this.sproyecto.save(proyec).subscribe(
      data=>{
        alert("proyecto nuevo agregado");
    this.router.navigate(['proyecto']);
  }, err =>{
    alert("fallo");
  this.router.navigate(['proyecto']);
})
  }



}
