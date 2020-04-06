import { Component, OnInit, AfterContentInit, ElementRef } from '@angular/core';
import { fabric } from "fabric"; 
import { IItem } from 'src/domains/IItem';
import { TextItem } from 'src/domains/TextItem';

@Component({
  selector: 'yai-canvas',
  templateUrl: './yai-canvas.component.html',
  styleUrls: ['./yai-canvas.component.scss']
})
export class YaiCanvasComponent implements OnInit, AfterContentInit {
  sizeCheckInterval = null;
  fabricRepos : FabricRepository;
  canvas: fabric.Canvas;
  width: number = 1024;
  height: number = 768;

  item: IItem;
  items: IItem[] = [
    new TextItem("A"),
    new TextItem("B"),
  ];

  constructor(private el: ElementRef) {    
  }

  ngOnInit(): void {
    this.canvas = new fabric.Canvas("c", {
      //centeredScaling: true,
      backgroundColor: 'rgba(248,248,248)',
      selection: true
    });
    this.fabricRepos = new FabricRepository(this.canvas);

    this.canvas.on('mouse:down', function(opt) {
      var evt = opt.e;
      if (evt.altKey === true) 
      {
        this.isDragging = true;
        this.selection = false;
        this.lastPosX = evt.clientX;
        this.lastPosY = evt.clientY;
      }
    }); 
    this.canvas.on('mouse:move', function(opt) {
      if (this.isDragging) {
        var e = opt.e;
        this.viewportTransform[4] += e.clientX - this.lastPosX;
        this.viewportTransform[5] += e.clientY - this.lastPosY;
        this.requestRenderAll();
        this.lastPosX = e.clientX;
        this.lastPosY = e.clientY;
      }
    });
    this.canvas.on('mouse:up', function(opt) {
      this.isDragging = false;
      this.selection = true;
      this.forEachObject(function(o) {
        o.selectable = true;
        o.setCoords();
      });
    });

    this.cavasResize();

    this.addItem(new TextItem('Hello'));
    this.addItem(new TextItem('World'));

    this.clear();
  }

  ngOnDestroy() {
    if (this.sizeCheckInterval !== null) {
      clearInterval(this.sizeCheckInterval);
    }
  }

  ngAfterContentInit(): void {
    this.sizeCheckInterval = setInterval(() => { this.cavasResize(); }, 10);
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

  addItem(item: IItem) {
    var fabricText = new fabric.IText(item.text, {
      left: (Math.random() * 0.8 + 0.1) * this.width,
      top: (Math.random() * 0.8 + 0.1) * this.height,
      fill: '#000',
    });
    this.canvas.add(fabricText);
  }

  add(type: string) {
    switch (type) {
      case 'note':
        this.addItem(new TextItem('text'));
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
    this.item = new TextItem("Text");
  }

  remove(item) {
    console.log('remove', item);
  }

  serialize() {
    var json = JSON.stringify(this.canvas);
    eval("console.log('-- JSON --'," + json + ");");
    console.log(this.canvas);
  }
}


export class FabricRepository {
  /**
   *
   */
  constructor(private canvas: fabric.Canvas) {
    
    
  }
}