import React, {useContext, useEffect} from 'react'
import {BaseItemProps} from "./BaseItem.props";
import './BaseItem.css'
import {SelectContext} from '../Select/SelectContext';

const BaseItem = ({
                      label,
                      value,
                      icon,
                      color,
                      backgroundColor,
                      active = false,
                      className,
                      ...props
                  }: BaseItemProps) => {
    const {setValue, labelValue, setLabelValue, setState} = useContext(SelectContext)

    useEffect(() => {
        if (active) {
            setLabelValue(label)
        }
    }, [])

    const select = (): void => {
        setValue(value)
        setLabelValue(label)
        setState('hide')
    }

    return <div className={`item ${labelValue === label ? 'active' : ''}`} {...props} onClick={() => select()}>
        <div className="item-label">{label}</div>
    </div>
}

export default BaseItem;