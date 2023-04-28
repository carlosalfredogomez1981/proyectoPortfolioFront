import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContenedorSuperiorComponent } from './componentes/contenedor-superior/contenedor-superior.component';
import { BarraNavSuperiorComponent } from './componentes/contenido/barra-nav-superior/barra-nav-superior.component';
import { BannerComponent } from './componentes/contenido/banner/banner.component';

import { AcercaDeComponent } from './componentes/contenido/acerca-de/acerca-de.component';
import { FormacionAcademicaComponent } from './componentes/contenido/formacion-academica/formacion-academica.component';
import { ExperienciaLaboralComponent } from './componentes/contenido/experiencia-laboral/experiencia-laboral.component';
import { ProgresoComponent } from './componentes/contenido/progreso/progreso.component';
import { RedesSocialesComponent } from './componentes/contenido/redes-sociales/redes-sociales.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CirculosProgresoComponent } from './componentes/contenido/circulos-progreso/circulos-progreso.component';
import { ProyectosComponent } from './componentes/contenido/proyectos/proyectos.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { VacioComponent } from './vacio/vacio.component';
import { LoginComponent } from './login/login.component';
import { interceptorProvider } from './servicios/interceptor-service';
import { NewExperienciaComponent } from './componentes/contenido/experiencia-laboral/new-experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './componentes/contenido/experiencia-laboral/edit-experiencia/edit-experiencia.component';
import { NeweducacionComponent } from './componentes/contenido/formacion-academica/neweducacion/neweducacion.component';
import { EditeducacionComponent } from './componentes/contenido/formacion-academica/editeducacion/editeducacion.component';



@NgModule({
  declarations: [
    AppComponent,
    ContenedorSuperiorComponent,
    BarraNavSuperiorComponent,
    BannerComponent,
    
    AcercaDeComponent,
    FormacionAcademicaComponent,
    ExperienciaLaboralComponent,
    ProgresoComponent,
    RedesSocialesComponent,
    CirculosProgresoComponent,
    ProyectosComponent,
    FooterComponent,
    PortfolioComponent,
    VacioComponent,
    LoginComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    NeweducacionComponent,
    EditeducacionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

    NgCircleProgressModule.forRoot({
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: '#78C000',
      innerStrokeColor: '#C7E596',
      animationDuration: 300,
    }),
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
