"use client";
import React, { useCallback, useMemo, useState } from 'react';
import { contextType } from './contextType';
import TransportContext from './TransportContext';


const ContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isMobileManu, setIsMobileManu] = useState<boolean>(false);
    const [isSidebar, setIsSidebar] = useState(false);
    const [isSearch, setIsSearch] = useState(false)
    const [showVideoPopup, setShowVideoPopup] = useState<boolean>(false);
    const [currentVideoUrl, setCurrentVideoUrl] = useState<string>("");
    const [activeSection, setActiveSection] = useState<string>("home");


    const handleVideoClick = useCallback((
        e: React.MouseEvent<HTMLAnchorElement>,
        videoUrl: string = "https://www.youtube.com/embed/MLpWrANjFbI?autoplay=1",
    ): void => {
        e.preventDefault();
        setCurrentVideoUrl(videoUrl);
        setShowVideoPopup(true);
    }, [setCurrentVideoUrl, setShowVideoPopup]);

    const info: contextType = useMemo(() => ({
        isMobileManu,
        setIsMobileManu,
        isSidebar,
        setIsSidebar,
        isSearch,
        setIsSearch,
        showVideoPopup,
        setShowVideoPopup,
        currentVideoUrl,
        setCurrentVideoUrl,
        handleVideoClick,
        activeSection,
        setActiveSection
    }), [
        isMobileManu,
        setIsMobileManu,
        isSidebar,
        setIsSidebar,
        isSearch,
        setIsSearch,
        showVideoPopup,
        setShowVideoPopup,
        currentVideoUrl,
        setCurrentVideoUrl,
        handleVideoClick,
        activeSection,
        setActiveSection
    ]);
    return (
        <TransportContext.Provider value={info}>
            {children}
        </TransportContext.Provider>
    );
};

export default ContextProvider;
