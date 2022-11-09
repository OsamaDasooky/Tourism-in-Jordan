import React from "react";
import NavBar from "./NavBar";

const Header = ({ logout, token }) => {
    return (
        <>
            <NavBar token={token} logout={logout} />
            <h1 className="text-center"> Welcome in Jordan</h1>
        </>
    );
};

export default Header;
