import { Dispatch, SetStateAction } from 'react';

export interface Context {
    setValue: Dispatch<SetStateAction<any>>;
    setLabelValue: Dispatch<SetStateAction<string|null>>;
    setState: Dispatch<SetStateAction<'initial' | 'show' | 'hide'>>;
    labelValue: string|null;
}
