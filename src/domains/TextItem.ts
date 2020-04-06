import { IItem } from './IItem';

export class TextItem implements IItem {
    text: string;
    /**
     *
     */
    constructor(text: string) {
        this.text = text;
    }
}
