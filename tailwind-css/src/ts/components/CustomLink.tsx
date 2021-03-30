type CustomLinkPropsType = {
    to: string;
    target?: string;
    rel?: string;
};

const CustomLink = ({ to, rel, target }: CustomLinkPropsType) => (
    <a href={to} target={target} rel={rel} className="link">
        Learn React
    </a>
);

CustomLink.defaultProps = {
    target: "",
    rel: "",
};

export default CustomLink;
