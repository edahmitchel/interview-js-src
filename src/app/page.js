"use client";

import Link from "next/link";
import Navbar from "./components/Nabar";
import "./main.css";
import axios from "axios";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [userData, setUserData] = useState({ email: "", password: "" });
  const handleLogin = async () => {
    const res = await axios.post("http://localhost:4000/api/login", userData);
    console.log(res);
  };
  return (
    <>
      <Navbar />
      <div className="login_container">
        <div className="form_container">
          <div className="login_form">
            <h1>We've Missed You</h1>
            <p>
              Kindly signin and get first access to the very best, community and
              unlock more opportunities
            </p>
            <label>email</label>
            <br />
            <input
              type="email"
              placeholder="email"
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
            />
            <br />
            <label>password</label>
            <br />
            <input
              type="password"
              placeholder="password"
              onChange={(e) =>
                setUserData({ ...userData, password: e.target.value })
              }
            />
            <button onClick={handleLogin}>login</button>
            <p>Forgot username or password?</p>
            <p>
              Don't have an account?<Link href={"#"}>sign up</Link>
            </p>
          </div>
        </div>
        <div className="login_image">
          <img
            alt="interview"
            src={
              "https://nairarefill.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FsignIn_img.04aa9e0c.jpg&w=1080&q=75"
            }
          />
        </div>
      </div>
    </>
  );
}
