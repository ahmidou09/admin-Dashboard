import React from "react";
import logo from "../../assets/logo.svg";
import styled from "styled-components";
import { FaSearch, FaExpand } from "react-icons/fa";
import { IoAppsSharp, IoSettingsOutline } from "react-icons/io5";

import { IoIosNotifications } from "react-icons/io";
import { Link } from "react-router-dom";

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-primary-2);
  border-bottom: 1px solid var(--color-lines);
  padding: 2rem;
  position: sticky;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 1000;
  right: 0;

  .logo {
    display: flex;
    align-items: center;
    gap: 2rem;

    img {
      width: 3.5rem;
      height: 3.5rem;
    }

    span {
      color: var(--color-white);
      align-self: end;
      font-size: 1.6rem;

      @media screen and (max-width: 400px) {
        display: none;
      }
    }
  }
  .icons {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    li {
      svg {
        color: var(--color-white);
        font-size: 2rem;
        cursor: pointer;
      }
    }

    &_notification {
      position: relative;
      span {
        position: absolute;
        top: -1rem;
        right: -0.5rem;
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 50%;
        background-color: var(--color-button-red-1);
        color: var(--color-white);
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 0.8rem;
        font-weight: 600;
        text-align: center;
        line-height: 1.5rem;
        font-family: "Poppins", sans-serif;
      }
    }

    &_profile {
      a {
        display: flex;
        align-items: center;
        gap: 1rem;

        img {
          width: 3.5rem;
          height: 3.5rem;
          border-radius: 50%;
          cursor: pointer;
          object-fit: cover;
          border: 2px solid var(--color-white);
          transition: all 0.3s ease-in-out;
        }

        &:hover {
          img {
            transform: scale(1.1);
            border: 2px solid var(--color-accent-1);
            transition: all 0.3s ease-in-out;
          }
        }
      }

      @media screen and (max-width: 720px) {
        .search,
        .appsSharp,
        .expand {
          display: none;
        }
      }

      span {
        font-weight: 400;
      }
    }
  }
`;

function NavBar() {
  return (
    <NavbarContainer>
      <Link to="/">
        <div className="logo">
          <img src={logo} alt="Company logo" />
          <span>Ahd</span>
        </div>
      </Link>
      <ul className="icons">
        <li className="icons_item search">
          <FaSearch />
        </li>
        <li className="icons_item appsSharp">
          <IoAppsSharp />
        </li>
        <li className="icons_item expand">
          <FaExpand />
        </li>
        <li className="icons_item icons_notification">
          <IoIosNotifications />
          <span>1</span>
        </li>
        <li className="icons_item icons_profile">
          <Link to="/users/1">
            <img src="https://avatar.iran.liara.run/public/1" alt="profile" />
            <span>John Doe</span>
          </Link>
        </li>
        <li className="icons_item">
          <IoSettingsOutline />
        </li>
      </ul>
    </NavbarContainer>
  );
}

export default NavBar;
