"use client";
import React, { useEffect, useState, useCallback, useMemo } from 'react';

interface TypingEffectProps {
    strings: string[];
    typeSpeed?: number;
    deleteSpeed?: number;
    pauseDuration?: number;
    className?: string;
    showCursor?: boolean;
}

const TypingEffect: React.FC<TypingEffectProps> = ({
    strings,
    typeSpeed = 100,
    deleteSpeed = 50,
    pauseDuration = 2000,
    className = '',
    showCursor = true
}) => {
    // Memoize strings to prevent unnecessary recalculations
    const memoizedStrings = useMemo(() => strings, [strings]);
    
    // Initialize with the first full string so SSR and first client render match
    // (avoids CLS from the h1 jumping from 2 lines to 3 lines on hydration)
    const [typedText, setTypedText] = useState<string>(memoizedStrings[0] ?? '');
    const [currentStringIndex, setCurrentStringIndex] = useState<number>(0);
    const [currentCharIndex, setCurrentCharIndex] = useState<number>(memoizedStrings[0]?.length ?? 0);
    const [isDeleting, setIsDeleting] = useState<boolean>(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            const currentString = memoizedStrings[currentStringIndex];

            if (!isDeleting) {
                if (currentCharIndex < currentString.length) {
                    setTypedText(currentString.substring(0, currentCharIndex + 1));
                    setCurrentCharIndex(prev => prev + 1);
                } else {
                    setTimeout(() => setIsDeleting(true), pauseDuration);
                }
            } else {
                if (currentCharIndex > 0) {
                    setTypedText(currentString.substring(0, currentCharIndex - 1));
                    setCurrentCharIndex(prev => prev - 1);
                } else {
                    setIsDeleting(false);
                    setCurrentStringIndex((prev) => (prev + 1) % memoizedStrings.length);
                }
            }
        }, isDeleting ? deleteSpeed : typeSpeed);

        return () => clearTimeout(timer);
    }, [currentCharIndex, currentStringIndex, isDeleting, memoizedStrings, typeSpeed, deleteSpeed, pauseDuration]);

    return (
        <span className={className}>
            {typedText}
            {showCursor && (
                <span className="cursor" style={{
                    animation: 'blink 1s infinite',
                    marginLeft: '2px'
                }}>|</span>
            )} 
        </span>
    );
};

export default React.memo(TypingEffect);
