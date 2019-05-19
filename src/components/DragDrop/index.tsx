import React from 'react'
import Dustbin from './Dustbin'
import Box from './Box'
import './index.css';

export default function Container() {
    return (
        <div className="dragDropContainer">
            <div style={{ overflow: 'hidden', clear: 'both' }}>
                <Dustbin />
            </div>
        </div>
    )
};