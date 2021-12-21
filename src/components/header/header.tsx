import { Link } from "gatsby";
import * as React from "react";
import { LinksHeader } from "./linksHeader";
import Hamburger from "./hamburger";

export const Header = () => {
    return (
        <header className="header">

            <div className="header__links">
                <nav className="navbar header__links-navbar" role="navigation" aria-label="main navigation">
                    <div className="navbar-brand">
                        <a className="navbar-item" href="https://bulma.io">
                            <img src="https://bulma.io/images/bulma-logo.png" alt="" width="112" height="28" />
                        </a>
                    </div>
                    <div className="navbar-end">
                    <Hamburger />
                            <div className="navbar-item header__links-desktop">
                                <LinksHeader></LinksHeader>
                            </div>

                        </div>
                </nav>
            </div>
        </header>
    )
}
