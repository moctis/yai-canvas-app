import { IItem } from './IItem';
import { fabric } from "fabric";

export class TextItem implements IItem {
    fabric: any;
    fabricText: any;
    fabricRect: any;
    text: string;
    
    constructor() {
        this.text = 'text';
    }

    set Text(val:string) {
        this.fabricText.text = this.text = val;
    }

    create(): any {
        this.fabricText = new fabric.IText(this.text, {
            fill: '#000',
        })

        this.fabricRect = new fabric.Rect({
            width: 100,
            height: 100,
            fill: '#f55',
            opacity: 0.7
        });

        this.fabric = new fabric.Group([ this.fabricRect, this.fabricText]);

        return this.fabricText;
    }
}
