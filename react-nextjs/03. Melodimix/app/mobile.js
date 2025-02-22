"use client";

import Link from "next/link";
import { List, XLg } from "react-bootstrap-icons";

export default function MobileNavbar() {
  function navigationHandler() {
    const target = document.getElementById("mobile-navigation");

    target.style.opacity = "1";
    target.style.visibility = "visible";
  }

  function closerHandler() {
    const target = document.getElementById("mobile-navigation");

    target.style.opacity = "0";
    target.style.visibility = "hidden";
  }

  return (
    <>
      <nav id="mobile-navbar">
        <Link href="/">
          <img src="https://i.imgur.com/Sm5pkYP.png" alt="Logo MelodiMix" title="MelodiMix" />
        </Link>
        <List id="mobile-navbar-list" onClick={navigationHandler} />
      </nav>

      <div id="mobile-navigation">
        <div id="mobile-navigation-top">
          <Link href="/">
            <img src="https://i.imgur.com/Sm5pkYP.png" alt="Logo MelodiMix" title="MelodiMix" />
          </Link>
          <XLg id="mobile-navigation-close-icon" onClick={closerHandler} />
        </div>

        <div id="mobile-navigation-center">
          <Link id="mobile-navigation-center-register" href="/register">
            <button>Daftar</button>
          </Link>
          <Link id="mobile-navigation-center-login" href="/login">
            <button>Masuk</button>
          </Link>
        </div>

        <div id="mobile-navigation-bottom">
          <p>Awali hari dengan melodi yang membara dan sudahi hari dengan melodi yang merdu!</p>
        </div>
      </div>
    </>
  );
}
