import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactosComponent } from './contactos/contactos.component';
import { EnlacesComponent } from './enlaces/enlaces.component';
import { HomeComponent } from './home/home.component';
import { PekesComponent } from './pekes/pekes.component';

import { QuinceComponent } from './quince/quince.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  { path: '', component: HomeComponent  },
  { path: 'contactos', component: ContactosComponent  },
  { path: 'quince', component: QuinceComponent  },
  { path: 'enlaces', component: EnlacesComponent  },
  { path: 'pekes', component: PekesComponent  },

  { path: 'footer', component: FooterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
