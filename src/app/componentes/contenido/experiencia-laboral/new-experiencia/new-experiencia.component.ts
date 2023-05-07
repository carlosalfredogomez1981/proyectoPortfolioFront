import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/servicios/s-experiencia.service';


@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit{
nombreExperiencia : string ='';
descripcionExperiencia : string ='';

  constructor(private sExperiencia: SExperienciaService, private router: Router){}
  ngOnInit():void{
  }

  onCreate(): void{
    const expe = new Experiencia(this.nombreExperiencia, this.descripcionExperiencia);
    this.sExperiencia.save(expe).subscribe(
      data=>{
        alert("experiencia nueva añadida");
    this.router.navigate(['proyecto']);
  }, err =>{
    alert("fallo");
  this.router.navigate(['proyectol']);
})
  }

}
