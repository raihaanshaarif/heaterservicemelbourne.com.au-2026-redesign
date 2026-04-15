"use client";

import React from 'react';
import useTransportContext from '../context/useTransportContext';

const SearchProp: React.FC = () => {
    const { setIsSearch } = useTransportContext();
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = e.currentTarget;
        form.reset()
        setIsSearch(pre => !pre)
    }
    const handleCloseSearch = () => {
        setIsSearch(pre => !pre)
    }
    return (
        <div className="search-popup">
            <div className="color-layer"></div>
            <button className="close-search" onClick={handleCloseSearch}><span className="far fa-times fa-fw"></span></button>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input type="search" name="search-field" placeholder="Search Here" required />
                    <button type="submit"><i className="fas fa-search"></i></button>
                </div>
            </form>
        </div>
    );
};

export default SearchProp;
