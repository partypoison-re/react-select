import React from 'react'
import './Select.css'
import arrow from './assets/arrow.png'

interface SelectProps {
    placeholder: string;
}

const Select = (props: SelectProps) => {
    return <div className={'container'}>
        <div className="placeholder">{props.placeholder}</div>
        <div className="arrow"><img src={arrow} alt="arrow"/></div>
    </div>
}

export default Select;