import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';
import { TokenService } from 'src/app/servicios/token.service';


@Component({
  selector: 'app-barra-nav-superior',
  templateUrl: './barra-nav-superior.component.html',
  styleUrls: ['./barra-nav-superior.component.css']
})

export class BarraNavSuperiorComponent implements OnInit { 
 isLogged = false;
 persona: persona = new persona ("","","","","","","","","","","","","",""); 

  constructor(private tokenService: TokenService, private router: Router,public personaService: PersonaService){
  }
 

  ngOnInit(): void {
    this.cargarPersona();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }  

  cargarPersona(){
    this.personaService.detail(1).subscribe(data =>{
    this.persona = data}
    )
    }

  onLogOut(): void {
  this.tokenService.logOut();
  window.location.reload();
  }

  login(){
    this.router.navigate(['login'])
  }

  

 

}
