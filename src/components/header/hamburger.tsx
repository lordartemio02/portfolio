import { Link } from "gatsby";
import * as React from "react";
import { slide as Menu } from 'react-burger-menu';
import { LinksHeader } from "./linksHeader";

const Hamburger = () => {
    return (
        <div className="hamburger">
            <Menu>
                <LinksHeader></LinksHeader>
            </Menu>
        </div>
    )
}
export default Hamburger;
