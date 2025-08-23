'use client';
import React, { createContext, useContext, useState } from 'react';

const PageContext = createContext();

export const PageProvider = ({ children }) => {
    const [currentPage, setCurrentPage] = useState('home'); // 'home', 'blog', 'compare', etc.
    const [selectedCollege, setSelectedCollege] = useState(null);
    const [selectedCourse, setSelectedCourse] = useState(null);

    return (
        <PageContext.Provider value={{ currentPage, setCurrentPage,
            selectedCollege,
            setSelectedCollege,
            selectedCourse,
            setSelectedCourse,}}>
            {children}
        </PageContext.Provider>
    );
};

export const usePageContext = () => useContext(PageContext);
