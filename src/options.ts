export interface DragDropOptions {
    container: string, // selector
    item: string,  // selector
    mode: 'swap' | 'reorder',
    classList: {
        itemDragStart: string,
        itemDragEnter: string,
        itemDragLeave: string,
        itemDragEnd: string,
        itemDragOver: string,
        itemDrop: string,
        containerDragStart: string,
        containerDragEnd: string,
        containerDragEnter: string,
        containerDragLeave: string,
        containerDragOver: string,
        containerDrop: string
    },
    transitionDuration: string
}

export const defaultOptions: DragDropOptions = {
    container: '*[data-dnd-container]',
    item: '*[data-dnd-item]',
    mode: 'reorder',
    classList: {
        itemDragStart: 'item-drag-start',
        itemDragEnter: 'item-drag-enter',
        itemDragLeave: 'item-drag-leave',
        itemDragEnd: 'item-drag-end',
        itemDragOver: 'item-drag-over',
        itemDrop: 'item-drop',
        containerDragStart: 'container-drag-start',
        containerDragEnd: 'container-drag-start',
        containerDragEnter: 'container-drag-start',
        containerDragLeave: 'container-drag-start',
        containerDragOver: 'container-drag-over',
        containerDrop: 'container-drag-drop'
    },
    transitionDuration: '500ms'
};
