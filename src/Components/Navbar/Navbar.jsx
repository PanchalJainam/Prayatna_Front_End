import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
    route: "/",
  },
  {
    name: "about",
    route: "/about",
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
      name: "volunteer",
      route: "/volunteerdata",
    },
    {
      name: "Contact Us",
      route: "/contact",
    },
    {
      name: "Logout",
    },
  ],
  user: [
    ...commonConfig,
    {
      name: "Feedback",
      route: "/feedback",
    },
    {
      name: "Search",
      route: "/search",
    },
    {
      name: "Logout",
    },
  ],
  withoutLogin: [
    ...commonConfig,
    {
      name: "Login",
      route: "/login",
    },
    {
      name: "Signup",
      route: "/registration",
    },
  ],
};

const createRoute = ({ name, route, open }) => {
  return (
    <li className="nav-item nav_li">
      <Link className="nav-link " aria-current="page" to={route} tabindex="-1">
        {name}
      </Link>
    </li>
  );
};

const loginButton = ({ name, route }) => {
  return (
    <div className="nav-item">
      <Link
        to={route}
        sx={{
          textDecoration: "none",
        }}
      >
        <Button
          aria-haspopup="true"
          variant="container"
          sx={{
            color: "white",
            marginTop: "7px",
            width: "auto",
            border: "2px solid white",
            borderRadius: "10px",
            textDecoration: "none",
          }}
        >
          {name}
        </Button>
      </Link>
    </div>
  );
};
const logoutButton = ({ name, navigate, setUserData }) => {
  return (
    <div className="nav-item">
      <Button
        aria-haspopup="true"
        variant="container"
        sx={{
          color: "white",
          marginTop: "7px",
          width: "auto",
          border: "2px solid white",
          borderRadius: "10px",
          textDecoration: "none",
        }}
        onClick={async () => {
          localStorage.removeItem("token");
          await setUserData();
          navigate("/login");
        }}
      >
        {name}
      </Button>
    </div>
  );
};

const signupButton = ({ name, route }) => {
  return (
    <Link to={route}>
      <button
        className="btn btn-light nav-item reg_btn"
        style={{
          width: "auto",
          color: "black",
          backgroundColor: "white",
          fontWeight: "600",
          textDecoration: "none",
        }}
      >
        {name}
      </button>
    </Link>
  );
};

const searchButton = () => {
  return (
    <ul className="navbar-nav ml-auto">
      <li className="nav-item nav_li">
        <Link className="nav-link" aria-current="page" to="/search">
          <SearchIcon sx={{ fontSize: "30px" }} />
        </Link>
      </li>
    </ul>
  );
};

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const { state, setState, setUserData } = useGlobalContext();
  const navigate = useNavigate();

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

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
              {routeConfig[state.userType]?.map((data) => {
                const { name, route } = data;
                let body;
                if (name === "Login") {
                  body = loginButton({ name, route });
                } else if (name === "Signup") {
                  body = signupButton({ name, route });
                } else if (name === "Search") {
                  body = searchButton({ name, route });
                } else if (name === "Logout") {
                  body = logoutButton({ name, navigate, setUserData });
                } else {
                  body = createRoute({ name, route });
                }

                return body;
              })}
            </ul>

            <div className="wrap_nav"></div>

            <div className="wrap_login navbar-nav ml-auto dropdown_main">
              <Stack direction="row" spacing={2}></Stack>
            </div>

            <div className="wrap_login navbar-nav ml-auto"></div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
