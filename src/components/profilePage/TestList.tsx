import React, {useState} from 'react';
import {
    DndContext,
    closestCenter,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
} from '@dnd-kit/core';
import {
    arrayMove,
    SortableContext,
    sortableKeyboardCoordinates,
    rectSortingStrategy,
} from '@dnd-kit/sortable';

import SortableItem from './SortableItem';

export default function TestList() {
    const [items, setItems] = useState([
        {id: '1'},
        {id: '2'},
        {id: '3'},
        {id: '4'},
        {id: '5'},
    ]);
    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        }),
    );

    return (
        <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
        >
            <SortableContext
                items={items.map(({id}) => id)}
                strategy={rectSortingStrategy}
            >
                <Grid>
                    {items.map(({id}) => (
                        <SortableItem key={id} id={id} />
                    ))}
                </Grid>
            </SortableContext>
        </DndContext>
    );

    function handleDragEnd(event: any) {
        const {active, over} = event;

        if (active.id !== over.id) {
            setItems((items) => {
                const oldIndex = items.findIndex(({id}) => id === active.id);
                const newIndex = items.findIndex(({id}) => id === over.id);

                return arrayMove(items, oldIndex, newIndex);
            });
        }
    }
}

function Grid({children}: any) {
    return (
        <div
            // style={{
            //     display: 'inline-grid',
            //     gridTemplateColumns: 'repeat(3, 1fr)',
            //     gridGap: 10,
            // }}
        >
            {children}
        </div>
    );
}
