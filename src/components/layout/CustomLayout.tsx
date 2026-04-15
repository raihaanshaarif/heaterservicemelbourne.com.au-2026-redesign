"use client"
import React from 'react';
import useTransportContext from '../context/useTransportContext';
import CustomCursor from '../elements/CustomCursor';
import SideBar from '../elements/SideBar';
import MobileNav from '../elements/MobileNav';
import SearchProp from '../elements/SearchProp';
import ChatPopup from '../elements/ChatPopup';
import ScrollToTop from '../elements/ScrollToTop';
import VideoPopup from '../elements/VideoPopup';

const CustomLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { isMobileManu, isSearch, showVideoPopup } = useTransportContext();
    return (
        <div className={`custom-cursor ${isMobileManu ? "locked" : ""} ${isSearch ? 'search-active' : ''}`}>
            <CustomCursor enabled />
            {children}
            <SideBar />
            <MobileNav />
            <SearchProp />
            <ChatPopup />
            <ScrollToTop />
            {showVideoPopup && <VideoPopup />}
        </div>
    );
};

export default CustomLayout;
