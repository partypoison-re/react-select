import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface SelectProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children: ReactNode;
  placeholder?: string;
  stickyPlaceholder?: boolean;
  arrowIcon?: string;
  labelColor?: string;
  onChange: (value: any) => void
}
