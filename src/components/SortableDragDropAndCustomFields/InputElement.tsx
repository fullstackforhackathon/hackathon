import React, { useState } from 'react'
import './field.css';

interface IProps {
    onAddCustomField: (name: any) => void;
}

const InputElement: React.FC<IProps> = ({ onAddCustomField }) => {
    const [inputValue, setInputValue] = useState('');
    return (
        <div className="inputElementContainer">
            <input
                type="text"
                value={inputValue}
                onChange={({ target }) => setInputValue(target.value)}
                style={{ width: '100%' }}
                autoFocus
            />
            <a href="#" onClick={() => {
                if (inputValue.length) onAddCustomField(inputValue)
            }}>
                <i className="fas fa-plus-square fa-lg" style={{ paddingTop: '0.4rem' }} />
            </a>
        </div>
    )
}

export default InputElement;