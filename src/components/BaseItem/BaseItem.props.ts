import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface BaseItemProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  label: string
  value: any
  icon?: string
  color?: string
  backgroundColor?: string
  rightIcon?: boolean
  active?: boolean
}
