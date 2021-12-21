import { Link } from "gatsby";
import * as React from "react";


export const LinksHeader = () => {
    return (
        <>
            <div className="navbar-item">
                <Link className="navbar-item-link" to="/">
                    First
                </Link>
            </div>
            <div className="navbar-item">
                <Link className="navbar-item-link" to="/">
                    Second
                </Link>
            </div>
            <div className="navbar-item">
                <Link className="navbar-item-link" to="/">
                    Thirty
                </Link>
            </div>
            <div className="navbar-item">
                <Link className="navbar-item-link" to="/">
                    Fourty
                </Link>
            </div>
        </>
    )
}
