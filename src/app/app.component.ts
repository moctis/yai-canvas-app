import { Component, OnInit } from '@angular/core';
import { fabric } from "fabric";
import { Item } from './Item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  item: Item;
  items: Item[] = [
    new Item("A"),
    new Item("B"),
  ];

  canvas: any;
  width: number = 800;
  height: number = 600;


  ngOnInit(): void {
    this.canvas = new fabric.Canvas("c", {
      centeredScaling: true,
      backgroundColor: 'rgba(248,248,248)',
      selection: true
    });

    this.canvas.setWidth(this.width);
    this.canvas.setHeight(this.height);

    this.addItem(new Item('hello'));
    this.addItem(new Item('hello2'));

    this.clear();
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

  title = 'canvas-app';
}
