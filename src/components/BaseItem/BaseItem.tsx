import React, { useContext } from 'react'
import { BaseItemProps } from "./BaseItem.props";
import './BaseItem.css'
import { SelectContext } from "../Select/SelectContext";

const BaseItem = ({
                      label,
                      value,
                      icon,
                      color,
                      backgroundColor,
                      className,
                      ...props
                  }: BaseItemProps) => {
    const {setValue, labelValue, setLabelValue, setState} = useContext(SelectContext)

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