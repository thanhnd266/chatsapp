import React, { useState } from 'react';
import { Drawer } from 'antd';

const MenuMobile = ({ open, setOpen }) => {

    const onClose = () => {
        setOpen(false);
    };
    return (
        <div className="menu-mobile">
            <Drawer title="Basic Drawer" placement="right" onClose={onClose} open={open}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>
        </div>
    );
}
 
export default MenuMobile;