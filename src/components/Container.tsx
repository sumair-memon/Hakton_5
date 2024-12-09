import React from 'react';

interface ContainerProps {
    children: React.ReactNode;
    className?: string;
}

export default function Container({ children, className }: ContainerProps) {
    return (
        <div className={`max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-2 ${className}`}>
            {children}
        </div>
    );
}