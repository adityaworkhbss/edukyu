import React, { useEffect, useState } from "react";
import "./NumberOfTrust.css";

const stats = [
    { value: 196, label: "Courses" },
    { value: 9000, label: "Prominent Universities" },
    { value: 9, label: "Alumni" },
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
            <div className="trust-row">
                <div className="trust-card">
                    <div className="trust-value">{Math.floor(counts[0])}+</div>
                    <div className="trust-label">{stats[0].label}</div>
                </div>
                <div className="trust-card">
                    <div className="trust-value">{Math.floor(counts[1])}+</div>
                    <div className="trust-label">{stats[1].label}</div>
                </div>
            </div>
            <div className="trust-row">
                <div className="trust-card">
                    <div className="trust-value">{Math.floor(counts[2])}+</div>
                    <div className="trust-label">{stats[2].label}</div>
                </div>
                <div className="trust-card">
                    <div className="trust-value">{Math.floor(counts[3])}+</div>
                    <div className="trust-label">{stats[3].label}</div>
                </div>
            </div>
        </div>
    );
}