"use client";
import { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { useInView } from "react-intersection-observer";

interface ProgressOnViewProps {
    endValue: number;
    size?: number;
    strokeWidth?: number;
    duration?: number; // animation speed
    pathColor?: string;
    textColor?: string;
}

const CirculaProgressOnView: React.FC<ProgressOnViewProps> = ({
    endValue,
    size = 120,
    strokeWidth = 5,
    duration = 20,
    pathColor = "red",
    textColor = "black",
}) => {
    const [progress, setProgress] = useState(0);

    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });

    useEffect(() => {
        if (!inView) return;

        let start = 0;

        const interval = setInterval(() => {
            start += 1;
            setProgress(start);

            if (start >= endValue) {
                clearInterval(interval);
            }
        }, duration);

        return () => clearInterval(interval);
    }, [inView, endValue, duration]);

    return (
        <div
            ref={ref}
            style={{
                width: size,
                height: size,
            }}
        >
            <CircularProgressbar
                value={progress}
                text={`${progress}%`}
                strokeWidth={strokeWidth}
                styles={buildStyles({
                    pathColor,
                    textColor,
                })}
            />
        </div>
    );
};

export default CirculaProgressOnView;
