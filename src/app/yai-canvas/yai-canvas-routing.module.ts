import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YaiCanvasComponent } from './yai-canvas.component';

const routes: Routes = [{ path: '', component: YaiCanvasComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class YaiCanvasRoutingModule { }
