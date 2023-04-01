import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo_imge from "../../Images/Prayatan.png";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
// import ClickAwayListener from "@mui/material/ClickAwayListener";
// import Grow from "@mui/material/Grow";
// import Paper from "@mui/material/Paper";
// import Popper from "@mui/material/Popper";
// import MenuItem from "@mui/material/MenuItem";
// import MenuList from "@mui/material/MenuList";
import Stack from "@mui/material/Stack";
import "./Navbar.css";
import { useGlobalContext } from "../../context/GlobalContext";
// import Mydata from "../NGOdeshboeard/Mydata";

// const userType = {
//   ngo
// }

const commonConfig = [
  {
    name: "Home",
    route: "/home",
  },
  {
    name: "about",
    route: "/about",
  },
];

const withoutLogin = [
  ...commonConfig,
  {
    name: "/Login",
    route: "/login",
  },
  {
    name: "/Signup",
    route: "/registration",
  },
];

const routeConfig = {
  ngo: [
    ...commonConfig,
    {
      name: "My Profile",
      route: "/myprofile",
    },
    {
      name: "Contact Us",
      route: "/contact",
    },
    {
      name: "Logout",
      route: "/logout",
    },
  ],
  user: [
    ...commonConfig,
    {
      name: "Search",
      route: "/search",
    },
    {
      name: "Feedback",
      route: "/feedback",
    },
    {
      name: "Logout",
      route: "/logout",
    },
  ],
};

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const { state, setState } = useGlobalContext();

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  // const handleClose = (event) => {
  //   if (anchorRef.current && anchorRef.current.contains(event.target)) {
  //     return;
  //   }

  //   setOpen(false);
  // };

  // function handleListKeyDown(event) {
  //   if (event.key === "Tab") {
  //     event.preventDefault();
  //     setOpen(false);
  //   } else if (event.key === "Escape") {
  //     setOpen(false);
  //   }
  // }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <>
      <nav className="navbar navbar-expand-lg nav_b">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {/* Prayatna */}
            <img className="logo" src={logo_imge} alt="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse  justify-content-center"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ml-auto">
              <li className="nav-item nav_li">
                <Link className="nav-link " aria-current="page" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item nav_li">
                <Link className="nav-link" aria-current="page" to="/about">
                  About
                </Link>
              </li>

              <li className="nav-item nav_li">
                <Link className="nav-link" aria-current="page" to="/myprofile">
                  My Profile
                </Link>
              </li>

              <li className="nav-item nav_li">
                <Link
                  className="nav-link "
                  aria-current="page"
                  to="/contact"
                  tabindex="-1"
                >
                  Contact
                </Link>
              </li>
            </ul>
            {/* </div> */}

            <div className="wrap_nav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item nav_li">
                  <Link className="nav-link" aria-current="page" to="/search">
                    <SearchIcon sx={{ fontSize: "30px" }} />
                  </Link>
                </li>
              </ul>
            </div>

            <div className="wrap_login navbar-nav ml-auto dropdown_main">
              <Stack direction="row" spacing={2}>
                <div className="nav-item">
                  <Link
                    to="/login"
                    sx={{
                      textDecoration: "none",
                    }}
                  >
                    <Button
                      ref={anchorRef}
                      id="composition-button"
                      aria-controls={open ? "composition-menu" : undefined}
                      aria-expanded={open ? "true" : undefined}
                      aria-haspopup="true"
                      onClick={handleToggle}
                      sx={{
                        color: "white",
                        marginTop: "7px",
                        width: "auto",
                        border: "2px solid white",
                        borderRadius: "10px",
                        textDecoration: "none",
                      }}
                    >
                      Login
                    </Button>
                  </Link>
                  {/* <Popper
                    open={open}
                    anchorEl={anchorRef.current}
                    role={undefined}
                    placement="bottom-start"
                    transition
                    disablePortal
                  >
                    {({ TransitionProps, placement }) => (
                      <Grow
                        {...TransitionProps}
                        style={{
                          transformOrigin:
                            placement === "bottom-start"
                              ? "left top"
                              : "left bottom",
                        }}
                      >
                        <Paper>
                          <ClickAwayListener onClickAway={handleClose}>
                            <MenuList
                              autoFocusItem={open}
                              id="composition-menu"
                              aria-labelledby="composition-button"
                              onKeyDown={handleListKeyDown}
                            >
                              <Link
                                to="/login"
                                style={{
                                  color: "black",
                                  textDecoration: "none",
                                }}
                              >
                                <MenuItem onClick={handleClose}>User</MenuItem>
                              </Link>
                              <Link
                                to="/ngologin"
                                style={{
                                  color: "black",
                                  textDecoration: "none",
                                }}
                              >
                                <MenuItem onClick={handleClose}>NGO</MenuItem>
                              </Link>
                            </MenuList>
                          </ClickAwayListener>
                        </Paper>
                      </Grow>
                    )}
                  </Popper> */}
                </div>
              </Stack>
            </div>

            <div className="wrap_login navbar-nav ml-auto">
              <Link to="/registration">
                <button
                  className="btn btn-light nav-item reg_btn"
                  style={{
                    width: "auto",
                    color: "black",
                    backgroundColor: "white",
                    fontWeight: "600",
                  }}
                >
                  Registration
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* <Carousel /> */}
      {/* <Card />
      <Card />
      <Card /> */}
    </>
  );
};

export default Navbar;
