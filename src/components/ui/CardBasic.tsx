import React from "react";
import type { ReactNode } from "react";

interface Props {
    children: ReactNode;
    className?: string;
}

const CardBasic: React.FC<Props> = ({ children, className }) => {
    return <div className={`bg-surface-50 dark:bg-surface-700 dark:border-2 dark:border-surface-600 p-4 my-3 rounded-xl flex ${className}`}>{children}</div>;
};

export default CardBasic;
