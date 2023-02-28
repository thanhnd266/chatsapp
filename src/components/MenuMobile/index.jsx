import React, { useEffect, useState } from 'react';
import { Drawer } from 'antd';
import { FileAddOutlined, HomeOutlined, MessageOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';
import { Link, NavLink } from 'react-router-dom';

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
                    <li className="menu-list__item">
                        <NavLink to="/" onClick={() => onClose()}>
                            <span>Home</span>
                            <HomeOutlined />
                        </NavLink>
                    </li>
                    <li className="menu-list__item">
                        <NavLink to="/messenger" onClick={() => onClose()}>
                            <span>Message</span>
                            <MessageOutlined />
                        </NavLink>
                    </li>
                    <li className="menu-list__item">
                        <NavLink to="/user" onClick={() => onClose()}>
                            <span>User</span>
                            <UserOutlined />
                        </NavLink>
                    </li>
                    <li className="menu-list__item">
                        <NavLink to="/team" onClick={() => onClose()}>
                            <span>Team</span>
                            <TeamOutlined />
                        </NavLink>
                    </li>
                    <li className="menu-list__item">
                        <NavLink to="/files" onClick={() => onClose()}>
                            <span>Files</span>
                            <FileAddOutlined />
                        </NavLink>
                    </li>
                </ul>
            </Drawer>
        </div>
    );
}
 
export default MenuMobile;