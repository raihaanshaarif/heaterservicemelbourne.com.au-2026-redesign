"use client";
import React, { useState, useEffect } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { useInView } from "react-intersection-observer";

interface ProgressBarsProps {
    title: string;
    value: number;
    showTitle?: boolean;
    showProgress?: boolean;
    height?: string;
}
const Progresbar: React.FC<ProgressBarsProps> = ({ title = "", value = 80, showTitle = true, showProgress = true, height = "7px" }) => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
    const [progress, setProgress] = useState<number>(0);

    useEffect(() => {
        if (inView) {
            let start = 0;
            const end = value;
            const duration = 700; // total animation time in ms
            const frameRate = 20; // update every 20ms
            const increment = end / (duration / frameRate);

            const timer = setInterval(() => {
                start += increment;
                if (start >= end) {
                    start = end;
                    clearInterval(timer);
                }
                setProgress(Math.round(start)); // both text + bar update together
            }, frameRate);
            return () => clearInterval(timer);
        }
    }, [inView, value]);

    return (
        <div className="progress-box" ref={ref}>
            {
                showTitle && <div className="bar-title">{title}</div>
            }
            <div className="bar-container">
                <ProgressBar
                    completed={progress}
                    maxCompleted={100}
                    bgColor="#FD5523"
                    baseBgColor="#e6e6e6"
                    height={height}
                    isLabelVisible={false}
                    className="progressWrapper"
                    barContainerClassName="barContainer"
                    animateOnRender={false} // disable internal animation
                />
                {
                    showProgress && <span className="countText">{progress}%</span>
                }
            </div>
        </div>
    );
};

export default Progresbar;
