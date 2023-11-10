import React from "react";


interface Props {
    text: string;
    href: string;
    bgColor: string;
    textColor: string;
    Icon?: string;
    order?: boolean;
    linkspage?: boolean;
    className?: string;
    style?: any;
}

const LinksButton: React.FC<Props> = ({ order, text, href, bgColor, textColor, Icon, linkspage, className, style }) => {
    const colorClasses = {
        bgColor: `bg-${bgColor}`,
        textColor: `text-${textColor} dark:text-${textColor}`
    };
    if (linkspage) {
        return (
            <a className="w-full" href={href} target="_blank">
                <button className={`w-full px-1 py-3 text-xl ${className} relative`} style={style}>
                    <i className={"absolute left-4 top-1/2 transform -translate-y-1/2 " + Icon}></i>
                    <span className={`block w-full text-center px-6 ${colorClasses.textColor} font-bold`}>{text}</span>
                </button>
            </a>
        );
    }
    if (order) {
        return (
            <button className={`w-full px-1 py-3 text-xl rounded-lg ${colorClasses.bgColor} relative`} style={style}>
                <i className={"absolute left-4 top-1/2 transform -translate-y-1/2 " + Icon}></i>
                <span className={`block w-full text-center px-6 ${colorClasses.textColor} font-bold`}>{text}</span>
            </button>
        );
    }
    return (
        <a className="w-full" href={href}>
            <button className={`w-full px-1 py-3 text-xl rounded-lg ${colorClasses.bgColor} relative`} style={style}>
                {/* {Icon ? <Icon size={30} className="absolute left-4 top-1/2 transform -translate-y-1/2" /> : null} */}
                <i className={"absolute left-4 top-1/2 transform -translate-y-1/2 " + Icon}></i>
                <span className={`block w-full text-center text-base px-6 ${colorClasses.textColor} font-bold`}>{text}</span>
            </button>
        </a>
    );
};

export default LinksButton;
