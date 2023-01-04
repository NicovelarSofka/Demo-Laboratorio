import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PersonaCreacionComponent } from "./personacreacion/personacreacion.component";
import { PersonaModificacionComponent } from "./personamodificacion/personamodificacion.component";
import { PersonaTablaComponent } from "./personatabla/personatabla.component";

const routes: Routes = [
    { path: '', redirectTo: 'personatabla', pathMatch: 'full' },
    { path: 'personatabla', component: PersonaTablaComponent },
    { path: 'personacreacion', component: PersonaCreacionComponent },
    { path: 'personamodificacion/:id', component: PersonaModificacionComponent },
    { path: '**', redirectTo: 'personatabla' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }