import { IItem } from './IItem';
import { fabric } from "fabric";

export class CircleItem implements IItem {
    fabric: any;
    text: string;

    constructor() {
    }

    create() {
        this.fabric =  new fabric.Circle({
            radius: 100,
            fill: '#f55',
            opacity: 0.7
        });

        return this.fabric;
    }
}
