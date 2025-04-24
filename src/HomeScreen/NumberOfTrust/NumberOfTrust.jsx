import React from "react";
import "./NumberOfTrust.css";

const stats = [
    { value: "197+", label: "Courses" },
    { value: "9000+", label: "Alumni" },
    { value: "10+", label: "Prominent Universities" },
    { value: "8+", label: "Years of Proficiency" },
];

export default function NumberOfTrust() {
    return (
        <div className="trust-container">
            {stats.map((stat, index) => (
                <div key={index} className="trust-card">
                    <div className="trust-value">{stat.value}</div>
                    <div className="trust-label">{stat.label}</div>
                    {index < stats.length - 1 && <div className="divider" />}
                </div>
            ))}
        </div>
    );
}
