"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";

const PageContext = createContext();

export const PageProvider = ({ children }) => {
    const [currentPage, setCurrentPageState] = useState("home");
    const [selectedCollege, setSelectedCollege] = useState(null);
    const [selectedCourse, setSelectedCourse] = useState(null);

    const setCurrentPage = useCallback((page) => {
        setCurrentPageState(page);
        window.history.pushState({ page }, "", `/${page === "home" ? "" : page}`);
    }, []);

    useEffect(() => {
        const handlePop = (event) => {
            const page = event.state?.page || "home";
            setCurrentPageState(page);
        };

        window.addEventListener("popstate", handlePop);

        // Initialize on first load
        const initialPage = window.location.pathname.replace("/", "") || "home";
        setCurrentPageState(initialPage);

        return () => window.removeEventListener("popstate", handlePop);
    }, []);

    return (
        <PageContext.Provider
            value={{
                currentPage,
                setCurrentPage,
                selectedCollege,
                setSelectedCollege,
                selectedCourse,
                setSelectedCourse,
            }}
        >
            {children}
        </PageContext.Provider>
    );
};

export const usePageContext = () => useContext(PageContext);
