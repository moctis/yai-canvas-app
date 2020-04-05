import { Component, OnInit, AfterContentInit, ElementRef } from '@angular/core';
import { fabric } from "fabric";
import { Item } from './../Item';

@Component({
  selector: 'yai-canvas',
  templateUrl: './yai-canvas.component.html',
  styleUrls: ['./yai-canvas.component.scss']
})
export class YaiCanvasComponent implements OnInit, AfterContentInit {
  sizeCheckInterval = null;

  canvas: any;
  width: number = 1024;
  height: number = 768;

  item: Item;
  items: Item[] = [
    new Item("A"),
    new Item("B"),
  ];

  constructor(private el: ElementRef) {
  }

  ngOnInit(): void {
    this.canvas = new fabric.Canvas("c", {
      centeredScaling: true,
      backgroundColor: 'rgba(248,248,248)',
      selection: true
    });

    this.cavasResize();

    this.addItem(new Item('hello'));
    this.addItem(new Item('hello2'));

    this.clear();
  }

  ngOnDestroy() {
    if (this.sizeCheckInterval !== null) {
      clearInterval(this.sizeCheckInterval);
    }
  }

  ngAfterContentInit(): void {
    this.sizeCheckInterval = setInterval(() => {this.cavasResize();}, 10);
  }

  cavasResize() {
    let h = this.el.nativeElement.offsetHeight;
    let w = this.el.nativeElement.offsetWidth;

    if (w !== this.width || h !== this.height) {
      this.width = w;
      this.height = h
      this.canvas.setWidth(this.width);
      this.canvas.setHeight(this.height);
    }
  }

  addText(text) {
    var fabricText = new fabric.IText(text, {
      left: (Math.random() * 0.8 + 0.1) * this.width,
      top: (Math.random() * 0.8 + 0.1) * this.height,
      fill: '#000',
    });
    this.canvas.add(fabricText);
  }

  addRectangle() {
    var fabricText = new fabric.Rect({
      width: 100,
      height: 100,
      left: (Math.random() * 0.8 + 0.1) * this.width,
      top: (Math.random() * 0.8 + 0.1) * this.height,
      fill: '#f55',
      opacity: 0.7
    });
    this.canvas.add(fabricText);
  }

  addCircle() {
    var fabricText = new fabric.Circle({
      radius: 100,
      left: (Math.random() * 0.8 + 0.1) * this.width,
      top: (Math.random() * 0.8 + 0.1) * this.height,
      fill: '#f55',
      opacity: 0.7
    });
    this.canvas.add(fabricText);
  }

  addItem(item) {
    console.log('add ', item);
    this.addText(item.text);
    this.items.push(item)
    this.clear();
  }

  add(type) {
    switch (type) {
      case 'note':
        this.addItem(new Item('text'));
        break;
      case 'rectangle':
        this.addRectangle();
        break;
      case 'circle':
        this.addCircle();
        break;
    }
  }

  clear() {
    this.item = new Item("Text");
  }

  remove(item) {
    console.log('remove', item);
  }
}
