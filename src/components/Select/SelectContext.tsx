import { createContext } from 'react';
import {Context} from "./selectContext.interface";


export const SelectContext = createContext<Context>({} as Context);