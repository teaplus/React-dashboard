import React from "react";
import "./header.css";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import NAV from "./NAV";
function Header() {
  return (
    <header id="header" className="header fixed-top d-flex align-items-center">
      {/* {logo} */}
      <Logo />
      {/* {searchbar} */}
      <SearchBar />
      {/* {nav} */}
      <NAV />
    </header>
  );
}

export default Header;
