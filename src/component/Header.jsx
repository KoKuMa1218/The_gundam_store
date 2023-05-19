import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { LOGO } from "../assets/assets";
function Header() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"><img src={LOGO} alt="" width="50" height="50" class="d-inline-block align-text-top" /> Navbar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse mx-auto" id="navbarNavAltMarkup">
            <div class="navbar-nav ms-auto p-2"style={{justifyContent:"end"}}>
              <a class="nav-link active" aria-current="page" href="#">Home</a>
              <a class="nav-link" href="#">Features</a>
              <a class="nav-link" href="#">Pricing</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
