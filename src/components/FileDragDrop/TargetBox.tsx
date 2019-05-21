import React from 'react'
import { NativeTypes } from 'react-dnd-html5-backend'
import {
    __EXPERIMENTAL_DND_HOOKS_THAT_MAY_CHANGE_AND_BREAK_MY_BUILD__,
    DropTargetMonitor,
} from 'react-dnd';
import './targetBox.css';
const {
    useDrop,
} = __EXPERIMENTAL_DND_HOOKS_THAT_MAY_CHANGE_AND_BREAK_MY_BUILD__;

export interface TargetBoxProps {
    onDrop: (props: TargetBoxProps, monitor: DropTargetMonitor) => void
}

const TargetBox: React.FC<TargetBoxProps> = props => {
    const { onDrop } = props
    const [{ canDrop, isOver }, drop] = useDrop({
        accept: [NativeTypes.FILE],
        drop(item, monitor) {
            if (onDrop) {
                onDrop(props, monitor)
            }
        },
        collect: monitor => ({
            isOver: monitor.isOver,
            canDrop: monitor.canDrop,
        }),
    })

    const isActive = canDrop && isOver
    return (
        <div ref={drop} className="targetBox">
            {isActive ? 'Release to drop' : 'Drag file here'}
        </div>
    )
}

export default TargetBox;