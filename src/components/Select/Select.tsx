import React, {useEffect, useState} from 'react'
import {SelectProps} from "./Select.props";
import './Select.css'
import arrow from './assets/arrow.png';
import {SelectContext} from "./SelectContext";

const Select = ({
                    children,
                    placeholder,
                    stickyPlaceholder,
                    arrowIcon,
                    labelColor,
                    className,
                    onChange,
                    ...props
                }: SelectProps) => {
    const [value, setValue] = useState<any>(null);
    const [labelValue, setLabelValue] = useState<string | null>(null);
    const [state, setState] = useState<'initial' | 'show' | 'hide'>('initial')

    useEffect(() => {
        onChange(value);
    }, [value])


    const openDropDown = (): void => {
        if (state === 'hide' || state === 'initial') {
            setState('show');
        } else {
            setState('hide')
        }
    }

    return <div className={'container'} {...props}>
        <div className={`wrapper-main ${state === 'show' ? 'select-open' : ''}`} onClick={() => openDropDown()}>
            <div className={'info'}>
                {placeholder ? <div className="placeholder">{placeholder}</div> : ''}
                {labelValue ? <div className="value">{labelValue}</div> : ''}
            </div>
            <div className="arrow">
                {arrowIcon ? <img src={arrowIcon} alt="arrow"/> : <img src={arrow} alt="arrow"/>}
            </div>
        </div>
        <div className={`items ${state === 'show' ? 'show' : ''} ${state === 'hide' ? 'hide' : ''}`}>
            <SelectContext.Provider value={{setValue, labelValue, setLabelValue, setState}}>
                {children}
            </SelectContext.Provider>
        </div>
    </div>
}

export default Select;