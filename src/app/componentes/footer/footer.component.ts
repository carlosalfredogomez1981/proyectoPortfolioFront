import { Component } from '@angular/core';
import {  OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent implements OnInit{persona: persona = new persona ("","","","","","","","","","","","","",""); 

constructor(public personaService: PersonaService, private tokenService: TokenService){}

isLogged = false;

ngOnInit(): void{
  this.cargarPersona();
  if(this.tokenService.getToken()){
    this.isLogged = true;
  } else {
    this.isLogged = false;
  }}


cargarPersona(){
this.personaService.detail(1).subscribe(data =>{
this.persona = data}
)
}

}
