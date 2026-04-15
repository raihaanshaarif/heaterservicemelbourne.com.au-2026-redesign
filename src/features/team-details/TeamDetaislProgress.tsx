"use client"

import React, { useState, useEffect } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { useInView } from "react-intersection-observer";

interface ProgressBarsProps {
    title: string;
    value: number;
}
const TeamDetaislProgress: React.FC<ProgressBarsProps> = ({ title, value }) => {
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
        <li>
            <div className="team-details__progress" ref={ref}>
                <h4 className="team-details__progress-title">{title}</h4>
                <ProgressBar
                    completed={progress}
                    maxCompleted={100}
                    bgColor="#FD5523"
                    baseBgColor="#e6e6e6"
                    height={"10px"}
                    isLabelVisible={false}
                    className="progressWrapper"
                    barContainerClassName="barContainer"
                    animateOnRender={false} // disable internal animation
                />
                <span className="countText">{progress}%</span>
            </div>
        </li>
    );
};

export default TeamDetaislProgress;
