import React, { useState, useEffect } from "react";
import "./Nav.css";

function Nav() {
  const [show, setshow] = useState(false);
  // this addes a black bar when the user scrolls 100px or more in the Y direction
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setshow(true);
      } else setshow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
      />

      <img
        className="nav__avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/OOjs_UI_icon_userAvatar-constructive.svg/480px-OOjs_UI_icon_userAvatar-constructive.svg.png"
        alt="Profile Avatar"
      />
    </div>
  );
}

export default Nav;
