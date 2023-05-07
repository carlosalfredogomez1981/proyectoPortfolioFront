import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CirculosProgresoComponent } from './componentes/contenido/circulos-progreso/circulos-progreso.component';
import { ExperienciaLaboralComponent } from './componentes/contenido/experiencia-laboral/experiencia-laboral.component';
import { FormacionAcademicaComponent } from './componentes/contenido/formacion-academica/formacion-academica.component';
import { ProgresoComponent } from './componentes/contenido/progreso/progreso.component';

import { ProyectosComponent } from './componentes/contenido/proyectos/proyectos.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { VacioComponent } from './vacio/vacio.component';
import { LoginComponent } from './login/login.component';
import { NewExperienciaComponent } from './componentes/contenido/experiencia-laboral/new-experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './componentes/contenido/experiencia-laboral/edit-experiencia/edit-experiencia.component';
import { NeweducacionComponent } from './componentes/contenido/formacion-academica/neweducacion/neweducacion.component';
import { EditeducacionComponent } from './componentes/contenido/formacion-academica/editeducacion/editeducacion.component';
import { NewSkillComponent } from './componentes/contenido/circulos-progreso/new-skill/new-skill.component';
import { EditSkillComponent } from './componentes/contenido/circulos-progreso/edit-skill/edit-skill.component';
import { EditAcercaDeComponent } from './componentes/contenido/acerca-de/edit-acerca-de/edit-acerca-de.component';
import { NuevoProyectoComponent } from './componentes/contenido/proyectos/nuevo-proyecto/nuevo-proyecto.component';
import { EditarProyectoComponent } from './componentes/contenido/proyectos/editar-proyecto/editar-proyecto.component';

const routes: Routes = [
  { path: '', component: PortfolioComponent },
  { path: 'vacio', component: VacioComponent },
  { path: 'nueva', component: NewExperienciaComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'laboral', component: ExperienciaLaboralComponent },
  { path: 'tecnologias', component: ProgresoComponent },
  { path: 'habilidades', component: CirculosProgresoComponent },
  { path: 'formacion', component: FormacionAcademicaComponent },
  { path: 'proyectos', component: ProyectosComponent },

  { path: 'login', component: LoginComponent },
  { path: 'edit/:id', component:EditExperienciaComponent },
  { path: 'nuevaEdu', component:NeweducacionComponent},
  { path: 'editEdu/:id', component:EditeducacionComponent },
  { path: 'newskill', component: NewSkillComponent},
  { path: 'editskill/:id', component: EditSkillComponent},
  { path: 'editAcercaDe/:id', component: EditAcercaDeComponent},
  { path: 'proyectos', component: ProyectosComponent},
  { path: 'nuevoProyecto', component: NuevoProyectoComponent},
  { path: 'editarProyecto/:id', component: EditarProyectoComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
