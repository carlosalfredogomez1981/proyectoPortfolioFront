import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { ImageService } from 'src/app/servicios/image.service';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-edit-acerca-de',
  templateUrl: './edit-acerca-de.component.html',
  styleUrls: ['./edit-acerca-de.component.css']
})
export class EditAcercaDeComponent {
  persona: persona = null;

  
  constructor(
    private sPersona: PersonaService,
    private activatedRouter: ActivatedRoute,
    private router: Router,
    public imgService: ImageService
  ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id']; 
    this.sPersona.detail(id).subscribe(
     data => {
      this.persona = data;
      },
    err => {
       alert('error al modificar persona');
      this.router.navigate(['']);
     }
  );
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.persona.imgPerfil = this.imgService.url
   this.sPersona.update(id, this.persona).subscribe(
    data => {
        this.router.navigate(['']);
      },
     err => {
        alert('error al modificar');
       this.router.navigate(['']);
      }
   );
  } 

 uploadImgPerfil($event:any){
    const id= this.activatedRouter.snapshot.params['id'];
    const name = "perfil" + id;
this.imgService.uploadImagePerfil($event, name)
  }  
}



