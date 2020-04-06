import { IItem } from './IItem';
import { fabric } from "fabric";

export class RectangleItem implements IItem {
    fabric: any;
    text: string;

    constructor() {
    }

    create() {
        this.fabric = new fabric.Rect({
            width: 100,
            height: 100,
            fill: '#f55',
            opacity: 0.7
        });

        return this.fabric;
    }
}
