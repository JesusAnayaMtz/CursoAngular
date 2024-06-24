import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { TiempoComponent } from './components/tiempo/tiempo.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {path: 'main', component: MainComponent},
    {path: 'tiempo', component: TiempoComponent},
    {path: '', redirectTo: '/main', pathMatch: 'full'},
    {path: '**', component: MainComponent},
];
@NgModule({
    imports: [
      RouterModule.forRoot (routes)
    ],
    exports: [RouterModule]
  })
  export class appRoutes{
    
  }