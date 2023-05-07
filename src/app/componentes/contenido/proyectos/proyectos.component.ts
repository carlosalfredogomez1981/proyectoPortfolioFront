import { Component, OnInit } from '@angular/core';
import { proyecto } from 'src/app/model/proyecto.model';
import { SproyectoService } from 'src/app/servicios/sproyecto.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit{
 
  proyec: proyecto[] = [];


  constructor(private sProyecto: SproyectoService, private tokenService: TokenService){
  }

  isLogged = false;
 
 
  ngOnInit(): void {
    this.cargarProyecto();
if(this.tokenService.getToken()){
  this.isLogged = true;
} else {
  this.isLogged = false;
}}

cargarProyecto():void{
  this.sProyecto.lista().subscribe(data => {this.proyec = data});
}

delete(id?: number){
  if(id != undefined){
    this.sProyecto.delete(id).subscribe(
      
      data => {this.cargarProyecto();},
      err => {alert("error al borrar")}
    )
  }
}
}
