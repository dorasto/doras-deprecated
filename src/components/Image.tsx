interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    class?: string;
}

const Image: React.FC<ImageProps> = ({ class: classProp, className, style, ...props }) => {
    const classes = className || classProp;
    return <img className={classes} style={style} {...props} loading="lazy" />;
};

export default Image;
