import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'canvas', loadChildren: () => import('./yai-canvas/yai-canvas.module').then(m => m.YaiCanvasModule)
  },
  {
    path: '',
    pathMatch: 'prefix', //default
    redirectTo: 'canvas'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
