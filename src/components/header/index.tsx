import React from "react";
import {
  FiFacebook,
  FiInstagram,
  FiHome,
  FiSettings,
  FiPhone,
  FiAlertCircle,
} from "react-icons/fi";
import { Link } from "react-router-dom";

import ComoFazerLogo from "../../assets/svg/como-fazer-logo";

const Header: React.FC = () => {
  return (
    <nav className="bg-white  sticky px-7 py-3 shadow-lg flex justify-between items-center">
      <div>
        <ComoFazerLogo width={200} />
      </div>
      <ul className="flex flex-row items-center">
        <li>
          <Link to="/" className="nav-item">
            <FiHome className="mr-2" /> Início
          </Link>
        </li>
        <li>
          <Link to="/about" className="nav-item mx-6">
            <FiSettings className="mr-2" /> Serviços
          </Link>
        </li>
        <li>
          <Link to="/blog/hello-world" className="nav-item">
            <FiPhone className="mr-2" /> Contato
          </Link>
        </li>
        <li>
          <Link to="/blog/hello-world" className="nav-item ml-6">
            <FiAlertCircle className="mr-2" /> Sobre
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
    </nav>
  );
};

export default Header;
