import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { VscRobot } from "react-icons/vsc";
import { LogOut } from "lucide-react";

export default function Header({ isLogin, setisLogin }) {
  const navigate = useNavigate();

  return (
    <div className="header">
      <nav className="mainNav">
        <div className="projectName">
          <Link to="/">Contest Calendar</Link>
        </div>
        <div className="links">
          <div className="link">
            <a
              href="https://t.me/codeArena_bot"
              target="_blank"
              rel="noopener noreferrer"
            >
              Telegram bot
            </a>
          </div>
          <div className="link">
            <a
              href="https://github.com/Pranay0083/scrapperContestCalendar"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
          <div className="link">
            {isLogin ? (
              <>
              <p onClick={()=>{
                sessionStorage.clear();
                localStorage.clear();
                setisLogin(false);
                navigate('/');
              }}>logout</p>
              </>
              
            ) : (
              <Link to="/signin">Sign In</Link>
            )}
          </div>
        </div>
        <div className="mainNav__icon">
          <div className="icon-link">
            <a
              href="https://t.me/codeArena_bot"
              target="_blank"
              rel="noopener noreferrer"
            >
              <VscRobot style={{ width: "50%", height: "100%" }} />
            </a>
          </div>
          <div className="icon_link">
            <a
              href="https://github.com/pranay0083"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub style={{ width: "50%", height: "100%" }} />
            </a>
          </div>
          <div className="icon_link">
            {isLogin ? (
              <div onClick={()=>{
                sessionStorage.clear();
                localStorage.clear();
                setisLogin(false);
                navigate('/');
              }}>
                <LogOut style={{ width: "50%", height: "100%" }}/>
              </div>
            ) : (
              <div className="iconwraper">
              <Link to="/signin" style={{ textDecoration: 'none', color: 'inherit'}} className="iconwraper">
                <IoPerson style={{ width: "50%", height: "100%" }} />
              </Link>
            </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
