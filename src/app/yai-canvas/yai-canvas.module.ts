import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YaiCanvasRoutingModule } from './yai-canvas-routing.module';
import { YaiCanvasComponent } from './yai-canvas.component';
import { MaterialModule } from '../material-module';


@NgModule({
  declarations: [YaiCanvasComponent],
  imports: [
    CommonModule,
    YaiCanvasRoutingModule,
    MaterialModule
  ]
})
export class YaiCanvasModule { }
