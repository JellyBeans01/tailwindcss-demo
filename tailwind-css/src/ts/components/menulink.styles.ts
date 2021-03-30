const classNames = require("classnames");

const defaultStyles = [
    "text-lg",
    "h-full",
    "m-3",
    "p-3",
    "transition-colors",
    "rounded-8px",
    "font-medium",
    "hover:text-primaryDark",
    "dark:hover:text-primaryLight",
    "dark:hover:bg-dmPrimary",
];

export const getMenuLinkStyles = (isActive: boolean) => {
    return classNames(
        {
            "text-white": !isActive,
            "text-primaryDark": isActive,
            "dark:text-primaryLight": isActive,
        },
        defaultStyles,
    );
};

export default { getMenuLinkStyles };
