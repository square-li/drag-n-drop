import {defaultOptions, DragDropOptions} from './options';

export class DragNDrop {
    constructor(options?: DragDropOptions) {
        if (!options) {
            options = defaultOptions;
        }
        const container = document.querySelector(options.container);
        const items = document.querySelectorAll(options.item);

        console.log(container);
        console.log(items);
    }
}
