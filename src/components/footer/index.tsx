import React from "react";
import { Link } from "react-router-dom";
import {
  FiFacebook,
  FiInstagram,
  FiHome,
  FiSettings,
  FiPhone,
  FiAlertCircle,
} from "react-icons/fi";

const Footer: React.FC = () => {
  return (
    <div className="bg-indigo-900  p-7  ">
      <ul className="flex flex-row items-center">
        <li>
          <Link to="/">
            <span className="nav-item">
              <FiHome className="mr-2" /> Início
            </span>
          </Link>
        </li>
        <li>
          <Link to="/about">
            <span className="nav-item mx-6">
              <FiSettings className="mr-2" /> Serviços
            </span>
          </Link>
        </li>
        <li>
          <Link to="/blog/hello-world">
            <span className="nav-item">
              <FiPhone className="mr-2" /> Contato
            </span>
          </Link>
        </li>
        <li>
          <Link to="/blog/hello-world">
            <span className="nav-item ml-6">
              <FiAlertCircle className="mr-2" /> Sobre
            </span>
          </Link>
        </li>
      </ul>
      <div className="flex flex-row">
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="mr-2 nav-item"
          href="https://facebook.com/comofazer2021"
        >
          <FiFacebook />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="nav-item"
          href="https://instagram.com/como-fazer-2021"
        >
          <FiInstagram />
        </a>
      </div>
    </div>
  );
};

export default Footer;
