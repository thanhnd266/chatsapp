import { Drawer } from 'antd';
import { navbarItems } from 'contants/navbar';
import { NavLink } from 'react-router-dom';

const MenuMobile = ({ open, setOpen }) => {

    const onClose = () => {
        setOpen(false);
    };


    return (
        <div className="menu-mobile">
            <Drawer 
                className="menu-mobile__wrapper" 
                title="Menu" 
                placement="right" 
                onClose={onClose}
                open={open}
            >
                <ul className="menu-list">
                    {navbarItems.map((menu, index) => (
                        <li className="menu-list__item" key={index}>
                            <NavLink to={menu.key} onClick={() => onClose()}>
                                <span>{menu.label}</span>
                                {menu.icon}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </Drawer>
        </div>
    );
}
 
export default MenuMobile;