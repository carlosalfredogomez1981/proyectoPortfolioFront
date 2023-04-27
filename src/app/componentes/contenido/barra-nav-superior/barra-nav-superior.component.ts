import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/servicios/token.service';


@Component({
  selector: 'app-barra-nav-superior',
  templateUrl: './barra-nav-superior.component.html',
  styleUrls: ['./barra-nav-superior.component.css']
})

export class BarraNavSuperiorComponent implements OnInit { 
 isLogged = false;
  constructor(private tokenService: TokenService, private router: Router){
  }
 

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }  

  onLogOut(): void {
  this.tokenService.logOut();
  window.location.reload();
  }

  login(){
    this.router.navigate(['login'])
  }

}
