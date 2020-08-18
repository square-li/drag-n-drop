import {defaultOptions, DragDropOptions} from './options';

let initialized: boolean = false;

const onDragStart = (evt: Event) => {
    // console.log(evt);
};

const onDragEnter = (evt: Event) => {
    // console.log('drag enter', evt);
};

const onDragLeave = (evt: Event) => {
    // console.log('drag leave', evt);
};


const onDragOver = (evt: Event) => {
    // console.log(evt)
};

const onDragEnd = (evt: Event) => {
    // console.log('dragend', evt);
};


const onDrop = (evt: Event) => {
    // console.log('drop on', evt.target);
    evt.preventDefault();
};


const init = (options?: DragDropOptions) => {
    let dragged: Element;
    if (initialized) {
        console.log('DragNDrop has been initialized .');
        return;
    }
    let dndOptions: DragDropOptions = {...defaultOptions, ...options};
    const container = document.querySelector(dndOptions.container);
    const items = document.querySelectorAll(dndOptions.item);
    console.log(container, items);

    if (container && items) {
        console.log('Container and items are found.');
    } else {
        return;
    }


    items.forEach(item => {
        item.setAttribute('draggable', 'true');
        (item as HTMLElement).style.transitionDuration = dndOptions.transitionDuration;
        item.addEventListener('dragstart', (evt) => {
            dragged = evt.target as Element;

            const event = evt as DragEvent;
            const data = event.dataTransfer as DataTransfer;
            data.dropEffect = 'none';

            item.classList.toggle(defaultOptions.classList.itemDragStart, true);
            item.classList.toggle(defaultOptions.classList.itemDragEnd, false);
            container.classList.toggle(defaultOptions.classList.containerDragStart, true);
            container.classList.toggle(defaultOptions.classList.containerDragEnd, false);
            onDragStart(evt);
        });

        item.addEventListener('dragenter', (evt) => {
            item.classList.toggle(defaultOptions.classList.itemDragEnter, true);
            item.classList.toggle(defaultOptions.classList.itemDragLeave, false);
            container.classList.toggle(defaultOptions.classList.containerDragStart, true);
            container.classList.toggle(defaultOptions.classList.containerDragLeave, false);
            onDragEnter(evt);
        });

        item.addEventListener('dragleave', (evt) => {
            item.classList.toggle(defaultOptions.classList.itemDragEnter, false);
            item.classList.toggle(defaultOptions.classList.itemDragLeave, true);
            onDragLeave(evt);
        });

        item.addEventListener('dragover', (evt) => {
            evt.preventDefault();
            item.classList.toggle(defaultOptions.classList.itemDragOver, true);
            item.classList.toggle(defaultOptions.classList.itemDrop, false);
            container.classList.toggle(defaultOptions.classList.containerDragOver, true);
            container.classList.toggle(defaultOptions.classList.containerDrop, false);

            onDragOver(evt);
        });

        item.addEventListener('dragend', (evt) => {
            item.classList.toggle(defaultOptions.classList.itemDragStart, false);
            item.classList.toggle(defaultOptions.classList.itemDragEnd, true);
            container.classList.toggle(defaultOptions.classList.containerDragStart, false);
            container.classList.toggle(defaultOptions.classList.containerDragEnd, true);
            onDragEnd(evt);
        });

        item.addEventListener('drop', (evt) => {
            evt.preventDefault();
            item.classList.toggle(defaultOptions.classList.itemDragOver, false);
            item.classList.toggle(defaultOptions.classList.itemDrop, true);
            container.classList.toggle(defaultOptions.classList.containerDragOver, false);
            container.classList.toggle(defaultOptions.classList.containerDrop, true);
            if (item === dragged) {
                return;
            }
            dragged.parentNode?.removeChild(dragged);
            const parent = item.parentNode;
            parent?.childNodes.forEach((node, index) => {
                if (node === item) {
                    (node as Element).insertAdjacentElement('afterend', dragged);
                }
            });
        });
    });

    initialized = true;

};


export {
    init
};
