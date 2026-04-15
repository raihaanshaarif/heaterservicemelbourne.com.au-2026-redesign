"use client";

import { contextType } from './contextType';
import TransportContext from './TransportContext';
import { useContext } from 'react';

const useTransportContext = (): contextType => {
    const context = useContext(TransportContext);
    if (context === null) {
        throw new Error("Context is null please try again and reload the page");
    }
    return context;
};

export default useTransportContext;
