"use client";
import { createContext } from 'react'; 
import { contextType } from './contextType';

const TransportContext = createContext<contextType | null>(null);
export default TransportContext;
