import { Component, OnInit } from '@angular/core';
import { fabric } from "fabric";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  itemName:string;
  canvas: any;
  width:number = 800-32;
  height:number = 600;


  ngOnInit(): void {
    this.canvas = new fabric.Canvas("c", {
      centeredScaling: true,
      backgroundColor: 'rgba(248,248,248)',
      selection: true
    });

    this.canvas.setWidth(this.width);
    this.canvas.setHeight(this.height);
    
    
    this.canvas.add(new fabric.IText('Hello Fabric!'));
    this.addText('hello');
    this.addText('hello2');
  }

  addText(text) {
    var fabricText = new fabric.IText(text, {
      left: (Math.random()*0.8+0.1) * this.width,
      top: (Math.random()*0.8+0.1) * this.height,
      fill: '#000',
      angle: Math.random()*30 - 15
    });
    this.canvas.add(fabricText);
  }

  add() {
    console.log('add ' + this.itemName);
    this.addText(this.itemName);
    this.itemName = "";
  }

  title = 'canvas-app';
}
