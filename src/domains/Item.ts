import { IItem } from './IItem';
export class Item implements IItem {
    text: string;
    /**
     *
     */
    constructor(text: string) {
        this.text = text;
    }
}
