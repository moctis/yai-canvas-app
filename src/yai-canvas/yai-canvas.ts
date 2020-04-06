import { fabric } from "fabric";

export class YaiCanvas {
    canvas : fabric.Canvas;

    constructor() {
        this.canvas = new fabric.Canvas("c", {
            centeredScaling: true,
            backgroundColor: 'rgba(248,248,248)',
            selection: true
          });
      
        this.canvas.on('mouse:down', this.onMouseDown());
        this.canvas.on('mouse:wheel', this.onMouseWheel());
        this.canvas.on('mouse:move', this.onMouseMove());
        this.canvas.on('mouse:up', this.onMouseUp());
    }
    private onMouseUp(): any {
        return function (opt) {
            this.isDragging = false;
            this.selection = true;
            this.forEachObject(o => {
                o.selectable = true;
                o.setCoords();
            });
        };
    }
    private onMouseMove(): any {
        return function (opt) {
            if (this.isDragging) {
                var e = opt.e;
                this.viewportTransform[4] += e.clientX - this.lastPosX;
                this.viewportTransform[5] += e.clientY - this.lastPosY;
                this.requestRenderAll();
                this.lastPosX = e.clientX;
                this.lastPosY = e.clientY;
            }
        };
    }
    private onMouseWheel(): any {
        return function (opt) {
            var delta = opt.e.deltaY;
            var pointer = this.getPointer(opt.e);
            var zoom = this.getZoom();
            zoom = zoom + delta / 200;
            if (zoom > 10)
                zoom = 10;
            if (zoom < 0.1)
                zoom = 0.1;
            this.zoomToPoint({ x: opt.e.offsetX, y: opt.e.offsetY }, zoom);
            opt.e.preventDefault();
            opt.e.stopPropagation();
        };
    }
    private onMouseDown(): any {
        return function (opt) {
            var evt = opt.e;
            if (evt.altKey === true) {
                this.isDragging = true;
                this.selection = false;
                this.lastPosX = evt.clientX;
                this.lastPosY = evt.clientY;
            }
        };
    }
    set Height(height: number) {
        this.canvas.setHeight(height);
    }
    set Width(width: number) {
        this.canvas.setWidth(width);
    }
    add(object: any): any {
        this.canvas.add(object);
        return object;
    }
    serialize() {
        return JSON.stringify(this.canvas)
    }
}
