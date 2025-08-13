"use client";

import { useState, useEffect } from "react";
import Layout from "@/GlobalComponent/Layout";
import './globals.css';

export default function Home() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 4000);

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return (
            <div className="flex items-center justify-center h-screen bg-white text-2xl font-semibold">
                Loading Website...
            </div>
        );
    }

    return <Layout />;
}
