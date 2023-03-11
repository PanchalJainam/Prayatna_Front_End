import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../Components/Navbar";

// import pic from "../Images/1.jpg";
// "proxy":"http://localhost:5000/",

const Signup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    ngo_name: "",
    email: "",
    head_name: "",
    address: "",
    activity: "",
    password: "",
    cpassword: "",
  });

  let names, value;

  const handle = (e) => {
    names = e.target.name;
    value = e.target.value;

    setUser({ ...user, [names]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();
    // toast("Registration Done");
    // alert("hey iam here");
    // validation();
    const {
      ngo_name,
      email,
      head_name,
      address,
      activity,
      password,
      cpassword,
    } = user;

    const res = await fetch("/registration", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ngo_name,
        email,
        head_name,
        address,
        activity,
        password,
        cpassword,
      }),
    });

    const data = await res.json();
    console.log(data);
    if (
      ngo_name === " " ||
      email === " " ||
      head_name === "" ||
      address === "" ||
      activity === "" ||
      password === "" ||
      cpassword === ""
    ) {
      console.log("All Fields Are Required To Fill");
    } else {
      if (data.status === 422 || !data) {
        console.log("error");
        window.alert("Invalide Registration");
        console.log("Invalide Registration");
      } else {
        console.log("success");
        // alert("Registration Successfully");
        console.log("Registration Successfully");
        navigate("/login");
      }
    }
  };

  function validation() {
    // alert("hello");
    // console.log("you clikced");
    var ngo_name = document.getElementById("ngo_name").value;
    var email = document.getElementById("email").value;
    var head_name = document.getElementById("head_name").value;
    var address = document.getElementById("address").value;
    var activity = document.getElementById("activity").value;
    var password = document.getElementById("password").value;
    var cpassword = document.getElementById("cpassword").value;

    if (ngo_name === "") {
      document.getElementById("ngo").innerHTML =
        "** Please Fill The Ngo_Name..";
      // return false;
    } else if (ngo_name.length <= 2 || ngo_name.length >= 30) {
      document.getElementById("ngo").innerHTML =
        "** length must be between 2 to 30.";
      // return false;
    } else if (!isNaN(ngo_name)) {
      document.getElementById("ngo").innerHTML =
        "** only charachters are allowed";
      // return false;
    } else if (ngo_name !== "") {
      document.getElementById("ngo").innerHTML = "";
    }
    if (email === "") {
      document.getElementById("emails").innerHTML =
        "** Please Fill The Email Address";
      // return false;
    } else if (email.indexOf("@") <= 0) {
      document.getElementById("emails").innerHTML = "** @ At invalid Position";
      // return false;
    } else if (email !== "") {
      document.getElementById("emails").innerHTML = "";
    }
    // else if (
    //   email.charAt(email.length - 4) !== "." ||
    //   email.charAt(email.length - 3) !== "."
    // ) {
    //   document.getElementById("emails").innerHTML = "** . At invalid Position";
    //   // return false;
    // }

    if (head_name === "") {
      document.getElementById("heads").innerHTML =
        "** Please Fill The Trustee Name";
      // return false;
    } else if (head_name !== "") {
      document.getElementById("heads").innerHTML = "";
    }
    if (address === "") {
      document.getElementById("add").innerHTML = "** Please Fill The Address";
      // return false;
    } else if (address !== "") {
      document.getElementById("add").innerHTML = "";
    }
    if (activity === "") {
      document.getElementById("activities").innerHTML =
        "** Please Fill The Activities..";
      // return false;
    } else if (activity !== "") {
      document.getElementById("activities").innerHTML = "";
    }
    if (password === "") {
      document.getElementById("pwd").innerHTML = "** Please Fill The Password";
      // return false;
    } else if (password.length < 6 || password.length >= 10) {
      document.getElementById("pwd").innerHTML =
        "** length must be between 6 to 10.";
      // return false;
    } else if (password !== "") {
      document.getElementById("pwd").innerHTML = "";
    }
    if (cpassword === "") {
      document.getElementById("cpwd").innerHTML =
        "** Please Fill The Confirm Password..";
      // return false;
    } else if (cpassword !== "") {
      document.getElementById("cpwd").innerHTML = "";
    }
    if (password !== cpassword) {
      document.getElementById("cpwd").innerHTML = "** Password Are Not Matched";
      // return false;
    } else {
      // ngo_name !== "" ||
      // email !== "" ||
      // head_name !== "" ||
      // activity !== "" ||
      // address !== "" ||
      // password !== "" ||
      // cpassword !== ""
      // alert("inisde");
      spndata();

      // PostData();
    }

    // else if (ngo_name !== "") {
    //   document.getElementById("ngo").innerHTML = "";
    //   return false;
    // }
    // PostData();
  }

  function spndata() {
    let pwd1;
    let cwd1;

    pwd1 = document.getElementById("pwd").innerHTML;
    cwd1 = document.getElementById("cpwd").innerHTML;

    if (pwd1 === "" || cwd1 === "") {
      toast.success("Registration Done", {
        position: "top-Center",
      });
      // navigate("/login");
    }
  }

  return (
    <>
      <Navbar />
      <div className="container mt-4 my-4">
        <h4 className="text-center mt-4 my-3">Ngo Registration Form</h4>
        <div className="row align-item-center container_signup ">
          {/* <div className="col images text-center">
            <img
              className="img-fluid justify-content-center align-items-center"
              src={pic}
              alt="Signup_Image"
            />
          </div> */}

          <div className="col text-center col_1 align-items-center col-md-6 col-sm-12">
            {/* <h4 className="text-center pt-2">Ngo Registration Form</h4> */}
            {/* <img src={pic} className="img-fluid" alt="..." /> */}
          </div>

          <div className="col col_2 col-md-6 col-sm-12 col_2 ">
            <form method="POST" onSubmit={PostData} auto-Complete="off">
              <div className="detail_from">
                <lable htflFor="ngo_name">Enter Name : </lable>
                <br />
                <input
                  type="text"
                  name="ngo_name"
                  id="ngo_name"
                  value={user.ngo_name}
                  onChange={handle}
                  autoComplete="off"
                  placeholder="Enter NGO Name"
                />
                <span id="ngo" className="text-danger"></span>
              </div>
              <div className="detail_from">
                <lable htflFor="email">Enter Email : </lable>
                <br />
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={user.email}
                  onChange={handle}
                  autoComplete="off"
                  placeholder="Enter Email "
                />
                <span id="emails" className="text-danger"></span>
              </div>
              <div className="detail_from">
                <lable htflFor="head_name">Enter Trustee Name : </lable>
                <br />
                <input
                  type="text"
                  name="head_name"
                  id="head_name"
                  value={user.head_name}
                  onChange={handle}
                  autoComplete="off"
                  placeholder="Enter Trustee Name"
                />
                <span id="heads" className="text-danger"></span>
              </div>
              <div className="detail_from">
                <label htflFor="address">Enter Address : </label>
                <br />
                <textarea
                  name="address"
                  id="address"
                  value={user.address}
                  onChange={handle}
                  placeholder="Enter Address..."
                ></textarea>
                <span id="add" className="text-danger"></span>
              </div>
              <div className="detail_from">
                <lable htflFor="activity">Enter Activity : </lable>
                <br />
                <input
                  type="text"
                  name="activity"
                  id="activity"
                  value={user.activity}
                  onChange={handle}
                  autoComplete="off"
                  placeholder="Enter NGO Activity"
                />
                <span id="activities" className="text-danger"></span>
              </div>
              <div className="detail_from">
                <lable htflFor="password">Enter Password : </lable>
                <br />
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={user.password}
                  onChange={handle}
                  autocomplete="new-password"
                  placeholder="Enter Password"
                />
                <span id="pwd" className="text-danger"></span>
              </div>
              <div className="detail_from">
                <lable htflFor="cpassword">Enter Confirm Password : </lable>
                <br />
                <input
                  type="password"
                  name="cpassword"
                  id="cpassword"
                  value={user.cpassword}
                  onChange={handle}
                  autoComplete="off"
                  placeholder="Enter Confirm Password"
                />
                <span id="cpwd" className="text-danger"></span>
              </div>
              <div className="d-grid gap-2 col-6 mx-auto mt-2 mb-5">
                <button
                  className="btn"
                  type="submit"
                  onClick={validation}
                  // style={{
                  //   background: "linear-gradient(#6ee2f5, #6454f0)",
                  // }}
                >
                  {/* <Link
                    to="/login"
                    style={{
                      textDecoration: "none",
                      color: "white",
                    }}
                  > */}
                  Signup
                  {/* </Link> */}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Signup;
