import { IItem } from './IItem';
import { fabric } from "fabric";

export class TextItem implements IItem {
    fabric: any;
    text: string;
    
    constructor() {
        this.text = 'text';
    }

    create(): any {
        this.fabric = new fabric.IText(this.text, {
            fill: '#000',
        })

        return this.fabric;
    }
}
