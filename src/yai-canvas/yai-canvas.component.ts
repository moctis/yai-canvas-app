import { Component, OnInit, AfterContentInit, ElementRef } from '@angular/core';
import { fabric } from "fabric";
import { IItem } from 'src/domains/IItem';
import { TextItem } from 'src/domains/TextItem';
import { YaiCanvas } from './yai-canvas';
import { CircleItem } from 'src/domains/CircleItem';
import { RectangleItem } from 'src/domains/RectangleItem';

@Component({
  selector: 'yai-canvas',
  templateUrl: './yai-canvas.component.html',
  styleUrls: ['./yai-canvas.component.scss']
})
export class YaiCanvasComponent implements OnInit, AfterContentInit {
  ResizeInterval = null;
  canvas: YaiCanvas;
  width: number = 1024;
  height: number = 768;

  constructor(private domElement: ElementRef) {
  }

  ngOnInit(): void {
    //TODO: Inject canvas from DI.
    this.canvas = new YaiCanvas();

    this.onResize();
    this.add('note').text = "Hello";
    this.add('note').text = "World";
  }
  ngOnDestroy() {
    if (this.ResizeInterval !== null) {
      clearInterval(this.ResizeInterval);
    }
  }

  ngAfterContentInit(): void {
    this.ResizeInterval = setInterval(() => this.onResize(), 10);
  }

  onResize() {
    let h = this.domElement.nativeElement.offsetHeight;
    let w = this.domElement.nativeElement.offsetWidth;

    if (w !== this.width || h !== this.height) {
      this.canvas.Width = this.width = w;
      this.canvas.Height = this.height = h;
    }
  }

  add(type: string):any {
    var item: IItem;

    switch (type) {
      case 'note':
        item = new TextItem();
        break;
      case 'rectangle':
        item = new RectangleItem();
        break;
      case 'circle':
        item = new CircleItem();
        break;
      default:
        return;
    }

    var fabric = item.create();
    fabric.left = (Math.random() * 0.8 + 0.1) * this.width;
    fabric.top = (Math.random() * 0.8 + 0.1) * this.height;
    this.canvas.add(fabric);
    return fabric;
  }

  serialize() {
    var json = this.canvas.serialize();
    eval("console.log('-- Canvas --'," + json + ");");
  }
}
