import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import { PersonaComponent } from './components/persona/persona.component';
import { ApiService } from './shared/services/api.service';
import { PersonaCreacionComponent } from './components/personacreacion/personacreacion.component';
import { PersonaModificacionComponent } from './components/personamodificacion/personamodificacion.component';


@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent,
        PersonaComponent,
        PersonaCreacionComponent,
        PersonaModificacionComponent,
        
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: 'persona', component: PersonaComponent },
            { path: 'personacreacion', component: PersonaCreacionComponent },
            { path: 'personamodificacion/:id', component: PersonaModificacionComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ],
    providers: [ApiService]
})
export class AppModuleShared {
}
