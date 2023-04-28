import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/servicios/skill.service';
import { TokenService } from 'src/app/servicios/token.service';



@Component({
  selector: 'app-circulos-progreso',
  templateUrl: './circulos-progreso.component.html',
  styleUrls: ['./circulos-progreso.component.css']
})
export class CirculosProgresoComponent implements OnInit  {
  skill: Skill [] = [];
 
  constructor(private skillS: SkillService, private tokenS: TokenService){}

  isLogged = false;

ngOnInit(): void {
   this.cargarSkills();
   if(this.tokenS.getToken()){
    this.isLogged = true;
  } else {
    this.isLogged = false;
  } 
}

cargarSkills():void{
  this.skillS.lista().subscribe(
    data => {this.skill = data}
  )
}



delete(id: number){
  if(id != undefined){
    this.skillS.delete(id).subscribe(
      data => {this.cargarSkills();},
      err => {alert("error al borrar")}
    )
  }





  
}
