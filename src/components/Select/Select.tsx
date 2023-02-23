import React from 'react'
import './Select.css'

interface SelectProps {
    placeholder: string;
}

const Select = (props: SelectProps) => {
    return <div>{props.placeholder}</div>
}

export default Select;