import {onDragOver, onDragStart} from './eventHandlers';

export interface DragDropOptions {
    container: string, // selector
    item: string,  // selector
    [k: string]: any
}

export const defaultOptions: DragDropOptions = {
    container: "*[data-dnd-container]",
    item: "*[data-dnd-item]",
    onDragStart: onDragStart,
    onDragOver: onDragOver
}
