import React, { useEffect, useState } from "react";
import "./NumberOfTrust.css";

const stats = [
    { value: 197, label: "Courses" },
    { value: 9000, label: "Alumni" },
    { value: 10, label: "Prominent Universities" },
    { value: 8, label: "Years of Proficiency" },
];

export default function NumberOfTrust() {
    const [counts, setCounts] = useState(stats.map(() => 0));

    useEffect(() => {
        const duration = 2000; // total animation time (2 seconds)
        const steps = 60; // number of updates (higher = smoother)
        const intervalTime = duration / steps;

        const increments = stats.map(stat => stat.value / steps);

        let stepCount = 0;

        const interval = setInterval(() => {
            stepCount++;
            setCounts(prevCounts =>
                prevCounts.map((count, idx) => {
                    const nextCount = count + increments[idx];
                    return nextCount > stats[idx].value ? stats[idx].value : nextCount;
                })
            );

            if (stepCount >= steps) {
                clearInterval(interval);
            }
        }, intervalTime);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="trust-container">
            {stats.map((stat, index) => (
                <div key={index} className="trust-card">
                    <div className="trust-value">
                        {Math.floor(counts[index])}+
                    </div>
                    <div className="trust-label">{stat.label}</div>
                    {index < stats.length - 1 && <div className="divider" />}
                </div>
            ))}
        </div>
    );
}
