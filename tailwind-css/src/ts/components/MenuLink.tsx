import { getMenuLinkStyles } from "./menulink.styles";

type MenuLinkPropsType = { label: string; isActive: boolean; onClick: () => void };
const MenuLink = ({ label, isActive, onClick }: MenuLinkPropsType) => (
    <div role="button" className={getMenuLinkStyles(isActive)} onClick={() => onClick()}>
        {label}
    </div>
);

export default MenuLink;
